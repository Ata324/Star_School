import { login } from "@/services/auth-service"
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const config={

    providers:[

        Credentials({
            async authorize(credentials) {
              
               const res=await login(credentials);
               const data=await res.json();
               
                if(!data.ok) return;

                const payload={
                    user:{...data},
                    accessToken:data.token.split(" ")[1]
                }
                delete payload.user.token;
                return payload;

            }
        })
    ],
    callbacks:{
        authorized({auth,request}){
            const {pathname}= request.nextUrl;
            const isLoggedIn = !!auth?.user?.role;
			const isInLoginPage = pathname.startsWith("/login");
            const isInDashboardPages = pathname.startsWith("/dashboard");

            if (isLoggedIn) {
				if (isInDashboardPages) {
					return true;
				} else if (isInLoginPage) {
					return Response.redirect(new URL("/dashboard"),request.nextUrl);
					
				}
			} else if (isInDashboardPages) {
				return false;
			}

			return true;

        }
    },

    async jwt({token,user}){

        return{...token,...user}
    },
    async session({session,token}){
        
        session.user=token.user;
        session.accessToken=token.accessToken;
        return session;
    },

        pages:{
            signIn:"/login"
        }
    }
   
    export const { handlers, signIn, signOut, auth }=NextAuth(config);
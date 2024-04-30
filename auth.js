import { login } from "@/services/auth-service"
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const config={

    providers:[

        Credentials({
            async authorized(auth,request){
                const res= await login(auth);
                const data=await res.json();

                if(!res.ok) return null;

                const payload={
                    user:{...data},
                    accessToken: data.token.split(" ")[1]
                }
                delete payload.user.token;
                return payload;
            }
        })
    ],
    callbacks:{
        authorize({auth,request}){
            const {pathname}=request.nextUrl;

            const isLoggedIn=auth.user?.role;
            const isInLoggedPage=pathname.startsWith("/login");
            const isInDashboardPage=pathname.startsWith("/dashboard");

            if(isLoggedIn){

                if(isInDashboardPage){
                    return true;
                }else if(isInLoggedPage){
                    return Response.redirect(new Url("/dashboard",request.nextUrl));
                }else if(isInDashboardPage){
                    return false;
                }
                return true;
            }
        }
    },
        pages:{
            signIn:"/login"
        }
    }
   
    export const { handlers, signIn, signOut, auth }=NextAuth(config);
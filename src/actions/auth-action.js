"use server"
import {  YupValidationError, convertFormDataToJSON, response, transformYupErrors } from "@/helpers/form-validation";

import { AuthError } from "next-auth";
import { signIn } from "../../auth";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
export const loginAction=async(prevState,formData)=>{

const fields=convertFormDataToJSON(formData);

try{
    AuthSchema.validateSync(fields,{ abortEarly: false })
   
    await signIn("credentials",fields); 



}
catch(err){

    if(err instanceof YupValidationError){
        return transformYupErrors(err.inner);
    }
    else if(err instanceof AuthError){
        return response(false, "invalid credentials");
    }
throw err;
}

}
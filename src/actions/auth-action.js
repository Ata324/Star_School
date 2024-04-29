import {  convertFormDataToJSON } from "@/helpers/form-validation";

export const loginAction=(prevState,formData)=>{

const fields=convertFormDataToJSON(formData);

try{
    AuthSchema.validateSync(fields,{ abortEarly: false })
   

}
catch(err){

}

}
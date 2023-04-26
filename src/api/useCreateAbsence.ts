import apiConfig from "@/config/apiConfig";
import { accessTokenKey } from "@/constant/accessTokenKey";
import { postCreateAbsence } from "@/constant/url";
import { IFormAbsence } from "@/interface/IFormAbsence";



export default async function useCreateAbsence(form: IFormAbsence) {
    
    const client = await apiConfig()
    const response = await client.post(postCreateAbsence, form);

    return response.data
}
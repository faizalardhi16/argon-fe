import apiConfig from "@/config/apiConfig";
import { updateProfile } from "@/constant/url";
import { IDetailProfile } from "@/interface/IDetailProfile";


export default async function useUpdateProfile(form: IDetailProfile){
    const client = await apiConfig();
    const response = await client.put(updateProfile, form)

    return response.data
}
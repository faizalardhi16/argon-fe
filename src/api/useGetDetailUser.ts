import apiConfig from "@/config/apiConfig";
import { detailUser } from "@/constant/url";

export default async function useGetDetailUser(){
    const client = await apiConfig();
    const response = await client.get(detailUser)

    return response.data
}
import { accessTokenKey } from "@/constant/accessTokenKey";
import { absenceURL } from "@/constant/url";
import { useLogin } from "@/store/loginStore";
import axios from "axios";


export default async function useGetAllAbsence(){
    const user = localStorage.getItem(accessTokenKey)

    const response = await axios.get(absenceURL, {
        headers: {
            Authorization: `Bearer ${user}`
        }
    });

    return response.data

}
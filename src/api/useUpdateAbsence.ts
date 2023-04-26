import { detailAbsence } from "@/constant/url"
import { IFormAbsence } from "@/interface/IFormAbsence";
import axios from "axios";

export default async function useUpdateAbsence(id: string, form: IFormAbsence){
    const urlAbsence = detailAbsence + "/" + id

    const response = await axios.put(urlAbsence, form);

    return response.data
}
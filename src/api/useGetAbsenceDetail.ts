import { detailAbsence } from "@/constant/url"
import axios from "axios";

export default async function useGetAbsenceDetail(id: string){
    const urlAbsence = detailAbsence + "/" + id

    const response = await axios.get(urlAbsence);

    return response.data
}
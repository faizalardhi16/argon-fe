export default function renderDate(value: string | null | undefined){

    if(!value){
        return "-"
    }

   

    const splitData = value.split("T")


    return splitData[0] + " " + splitData[1].substring(0,8)
}
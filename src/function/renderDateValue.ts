export default function renderDateValue(date: string | null | undefined){

    if(!date){
        const format = new Date();

        return format.toISOString().substring(0,16) 
    }

    return date.substring(0,16)

}
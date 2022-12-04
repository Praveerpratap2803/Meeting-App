
interface Attendee {
    userId:string,
    email:string
}

interface IAddAMeetingContent{
    _id?:string,
    name:string,
    description:string,
    date:string,
    startTime:{
        hours:number,
        minutes:number
    },
    endTime:{
        hours:number,
        minutes:number
    },
    attendees:Attendee[]|string[]

}

export default IAddAMeetingContent
export {
    Attendee
}












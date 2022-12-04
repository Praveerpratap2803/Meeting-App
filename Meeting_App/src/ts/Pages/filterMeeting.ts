import {addAttendee,excuseFromMeet,searching} from "../services/meetings"
import Meetings,{Attendee} from "../models/addAMeetingContent"
import initNav from "../services/navBar"
import "../../scss/pages/Meetings.scss"
//import {loadPage} from "../loadPage"

class SearchMeeting{
    
    //let cal;
    
    showSearchMeeting=( meets :Meetings[] )=>{
        const meetingList = document.querySelector( ".matchingMeets" ) as HTMLElement
        //console.log(meets)
        let meetingListStr=" "
        meets.forEach(
            ( meetings:Meetings )=>{
                //console.log(meetings)
                const  dat = new Date( `${meetings.date}` )
                const dateString = dat.getDate();
                const month = dat.getMonth();
                const monthString = this.Month( month );
                const year = dat.getFullYear();
                const hourStart = meetings.startTime.hours;
                const hourEnd = meetings.endTime.hours;
                const minuteStart = meetings.startTime.minutes;
                const minuteEnd = meetings.endTime.minutes;
                // let attendesStr = "";
                // for (let i = 0; i < meetings.attendees.length; i++) {
                // attendesStr += meetings.attendees[i].email + "   ";
                // }
                const meetstr = meetings.attendees.map( function( attendee ){
                    return ( ( attendee as Attendee ).email )
                } ).join( ', ' )
                //meetingListStr =''
                meetingListStr += `
                    <div class="meetSep" meetID="${meetings._id}">
                        <div class="excusePart">
                            <span class="meetDateFilter" >${dateString} ${monthString} ${year}</span>
                            <span class="meetTimeFilter" >${hourStart.toString().padStart( 2,"0" )}:
                                    ${minuteStart.toString().padStart( 2,"0" )} - 
                                    ${hourEnd.toString().padStart( 2,"0" )}:
                                    ${minuteEnd.toString().padStart( 2,"0" )}</span> 
                            
                            
                        

                            <div class="meetNameFilter" >${meetings.name} </div>
                            <button class="excuseBtn">Excuse yourself</button>
                        </div>
                        <hr>
                        <div class="strAttendees" ><b>Attendees:</b> ${meetstr} </div>
                        <form action="https://mymeetingsapp.herokuapp.com/api/meetings" method="patch" class="addMemberForm">
                            <div class="addMemberContent" >
                            
                            <select class="addMember" id="addMemberLabel" name="attendee" aria-label="Add Member to a Meet">
                                <option value="">Select member</option>
                                <option value="62f0cc77ad71500015c8be4a">sumedh@example.com</option>
                                <option value="62f1d658550f0200158115a7">ankitawaghmare@publicis.com</option>
                                <option value="62f0cb8ead71500015c8be3c">basavaraj@example.com</option>
                            </select>
                            </div>
                            <button type="submit" class="addMemberButton">Add</button>
                        </form>
                    </div>
                
                `
            }

        );

        meetingList.innerHTML = meetingListStr;
        this.deleteMeeting();
        this.addingMember();
        
    }
    addingMember=()=>{
        const addFormContents = document.querySelectorAll( ".addMemberForm" ) 
        console.log( addFormContents )
        addFormContents.forEach( function( addFormContent ){
            const selectMember = addFormContent.querySelector( ".addMember" ) as HTMLSelectElement
            addFormContent.addEventListener( "submit",function( event ){
                event.preventDefault();
                const userID = selectMember.value;
                //console.log(userID);
                const meet = addFormContent.closest( ".meetSep" ) as HTMLElement
                const meetID = meet.getAttribute( "meetID" );
                //console.log(meetID)
                addAttendee( meetID as string,userID )
                    .then( function(){
                        console.log( "Success" )
                        
                        window.alert( "Added a member " )
                        
                    } )
                    .catch( function( error ){
                        console.log( error.message )
                    } )
                
            } )

        } )



    }

    deleteMeeting=()=>{
        const buttons = document.querySelectorAll( ".excuseBtn" )
        buttons.forEach( function( button ){
            button.addEventListener( "click",function(){
                const deleteMeet = button.closest( ".meetSep" ) as HTMLElement;//Returns the first (starting at element(button)) inclusive ancestor that matches selectors(here selector is .meetSep class , that ancestor have .meetSep class)
                //console.log(deleteMeet)
                const meetID = deleteMeet.getAttribute( "meetID" )//getAttribute help to get the vaule from dom having attribute meetID (meetID="${meetings._id}")
                //console.log(meetID);
                
                excuseFromMeet( meetID as string )
                    .then(
                        function( response ){
                            console.log( response );
                        
                            deleteMeet.remove();//remove will remove that(deleteMeet) node
                        
                        }
                    )
                
                    .catch( function( error ){
                        console.log( error.message )
                    } )
                

                
            } )
        } )
    }
    Month( month:number ) {
        let monthString;
        if ( month === 0 ) {
            monthString = "January";
        } else if ( month === 1 ) {
            monthString = "February";
        } else if ( month === 2 ) {
            monthString = "March";
        } else if ( month === 3 ) {
            monthString = "April";
        } else if ( month === 4 ) {
            monthString = "May";
        } else if ( month === 5 ) {
            monthString = "June";
        } else if ( month === 6 ) {
            monthString = "July";
        } else if ( month === 7 ) {
            monthString = "August";
        } else if ( month === 8 ) {
            monthString = "September";
        } else if ( month === 9 ) {
            monthString = "October";
        } else if ( month === 10 ) {
            monthString = "November";
        } else if ( month === 11 ) {
            monthString = "December";
        }
        return monthString;
    }
    searchMeet=( showADate:string,searchFor:string )=>{
        console.log( showADate )
        console.log( searchFor )
        searching( showADate,searchFor )
            .then(
                function( response ){
                //console.log(response);
                    return response;
                
                }
            )
            .then( this.showSearchMeeting )
        
    }
    addEventListeners=()=>{
        const searchForm=document.querySelector( '#searchForm' ) as HTMLInputElement
        const searchDate=document.querySelector( '#date' ) as HTMLSelectElement
        const searchWord=document.querySelector( '#description' ) as HTMLTextAreaElement
        searchForm.addEventListener( 'submit',( event )=>{
            event.preventDefault();
            const  showADate= searchDate.value;
            const searchFor = searchWord.value.trim();
            //console.log(showADate)
            //console.log(searchFor)

            this.searchMeet( showADate,searchFor );

        } )

    }


    //window.addEventListener('load',function(){
    load=()=>{
        //cal=document.getElementById(showCalender)
        //showLoadingMessage();
        this.addEventListeners();
        initNav();
        //searchMeet();m
    }
}

export default SearchMeeting






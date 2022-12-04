import {viewCalender} from "../services/meetings"
import Meeting,{Attendee} from "../models/addAMeetingContent"
import initNav from "../services/navBar"
import "../../scss/pages/Calender.scss"
import { strMonth,strDay } from "../services/commonMethods"
//import {loadPage} from "../loadPage"

class Calender{

    meeta=( document.querySelector( '#meet' ) as HTMLInputElement )
    meetDate = ( document.querySelector( '.rDate' ) as HTMLElement )
    weekName = ( document.querySelector( '.week' ) as HTMLElement )
    allMeet=( document.querySelector( '.showMeeting' ) as HTMLElement ); // allMeet is a dom()
    
    /*
    function showLoadingMessage(){
        calFullPage.textContent='Loading the content ...';
        calFullPage.classList.remove('hide')
    }
    */
    
    showCalender=( cal:Meeting[] )=>{
        
        //this.allMeet=( document.querySelector( '.showMeeting' ) as HTMLElement ); // allMeet is a dom()
        //console.log(allMeet)
        //const hour8 =  document.querySelector('.hour8')//querySelector ->Returns the first element that is a descendant of node(Parent node->document) that matches selectors('.hour8'(class)) and querySelectorAll ->Returns array of all the element that is a descendant of node that matches selectors.
        //console.log(cal)//here cal is an array
        let calMeet = '';
        
        cal.forEach(        // here we are iterating to every element of the array using foreach       
            ( meeting:Meeting )=>{//meeting is an object(key:value pairs)
                //console.log(meeting)
                //console.log(meeting)
                const startTimeHour = parseInt( `${meeting.startTime.hours}` );//here we selecting hours value which is inside startTime object which is inside meeting object
                const endTimeHour = parseInt( `${meeting.endTime.hours}` );
                const startTimeMinutes= parseInt( `${meeting.startTime.minutes}` );
                const endTimeMinutes= parseInt( `${meeting.startTime.minutes}` );
                const duration1:number = this.calheight( startTimeHour,startTimeMinutes,endTimeHour,endTimeMinutes );
                const duration:number= endTimeHour - startTimeHour;
                //console.log(startTime)
                const topHeight = startTimeHour*45-48 ;//here we are giving the distance between nav and meeting(refering startTime). 48px is for displaying meeting at 0th hour and 45px increment for every hour eg startTime=8 -> 8*45 + 48
                const meetstr = meeting.attendees.map( function( attendee ){
                    return ( ( attendee as Attendee ).email )
                } ).join( ', ' )
                //allMeet.textContent += meeting.name
                calMeet += `
                            <div class="calender allMeet" style="position:absolute;top:${topHeight}px;height:${duration1}px;color:black;z-index:4;">
                                <div style="background-color:lightgray;">
                                ${meeting.name} 
                                <br/> 
                                attendees : ${meetstr} 
                                </div>
                            </div>


                        `

            }
        )
        this.allMeet.innerHTML +=  calMeet // innerHTML convert the calMeet string into html format and store inside dom allMeet 
        
    }

    calheight = ( startTimeHour:number,endTimeHour:number,startTimeMinutes:number,endTimeMinutes:number )=>{
        let height=0;
        if( startTimeMinutes===0 && endTimeMinutes===0 )
        {
            return height = endTimeHour-startTimeHour;
        }
        if( startTimeMinutes===0 ){
            return height = endTimeHour-startTimeHour + ( endTimeMinutes/60 )*48
        }
        if( endTimeMinutes===0 ){
            return height = endTimeHour-startTimeHour + ( ( 60-startTimeMinutes )/60 )*48
        }
        if( startTimeMinutes!==0 && endTimeMinutes!==0 ){
            return height = endTimeHour-startTimeHour + ( endTimeMinutes/60 )*48 + ( ( 60-startTimeMinutes )/60 )*48
        }
        return height;
    }


    addEventListeners=()=>{ // in this function we are adding all the events handler
        // const meeta=document.querySelector('#meet')
        // const meetDate = document.querySelector('.rDate')
        // const weekName = document.querySelector('.week')
        //console.log(meeta)
        this.meeta.addEventListener( 'input',()=>{

            const displayDate = this.meeta.value//here displayDate is of type date string
            //console.log(displayDate)
            const disDate=new Date( displayDate ) //So we have to convert into Date type to extract date,month,day,year
            const month = disDate.getMonth();
            const days = disDate.getDay();//here we get the day(0 to 6 acc. to mon(0) - sun(6))
            const monthString = strMonth( month );//here we are calling strMonth() function and passing the month variable value ,that we got from getMonth() inbuilt function
            const dayString = strDay( days )
            const sendDate=displayDate.toString() //then again convert into string , so that we can pass to fetchCalender function
            //console.log( sendDate)
            this.meetDate.innerHTML = `<h2>${disDate.getDate()}  ${monthString}  ${disDate.getFullYear()}</h2>`
                                    
                                
            this.weekName.innerHTML = `<p>${dayString}</p>`

            this.fetchCalender( sendDate );

        } )
    }

    // strMonth( month:number ){
    //     let monthString;
    //     if ( month === 1 ) {
    //         monthString = "January";
    //     } else if ( month === 2 ) {
    //         monthString = "February";
    //     } else if ( month === 3 ) {
    //         monthString = "March";
    //     } else if ( month === 4 ) {
    //         monthString = "April";
    //     } else if ( month === 5 ) {
    //         monthString = "May";
    //     } else if ( month === 6 ) {
    //         monthString = "June";
    //     } else if ( month === 7 ) {
    //         monthString = "July";
    //     } else if ( month === 8 ) {
    //         monthString = "August";
    //     } else if ( month === 9 ) {
    //         monthString = "September";
    //     } else if ( month === 10 ) {
    //         monthString = "October";
    //     } else if ( month === 11 ) {
    //         monthString = "November";
    //     } else if ( month === 12 ) {
    //         monthString = "December";
    //     }
    //     return monthString;
    // }
    // strDay( days:number ){
    //     let dayString;
    //     if ( days === 0 ) {
    //         dayString = "Sunday";
    //     } else if ( days === 1 ) {
    //         dayString = "Monday";
    //     } else if ( days === 2 ) {
    //         dayString = "Tuesday";
    //     } else if ( days === 3 ) {
    //         dayString = "Wednesday";
    //     } else if ( days === 4 ) {
    //         dayString = "Thursday";
    //     } else if ( days === 5 ) {
    //         dayString = "Friday";
    //     } else if ( days === 6 ) {
    //         dayString = "Saturday";
    //     }
    //     return dayString;
    // }
    fetchCalender( formattedDate:string ){
        //calStr = '';
        viewCalender( formattedDate )
            .then(
                ( meet ) =>{//passing the json file(here which is of object type) in the function , which was received from viewCalender function (when every thing was resolved )
                //console.log(typeof(meet)) is of object type (which is array object  ) and inside array there is number of object , meet=[{},{},{},...]
                    // console.log(meet)
                    //window.location.href='./calender.html'
                // history.pushState('','','/calender.html')
                // loadPage(location.pathname)
                    return meet;
                
                }
            
            )
            .then( this.showCalender )
    }

    //window.addEventListener('load',function(){
    load =()=>{
        
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${( today.getMonth()+1 ).toString().padStart( 2,'0' )}-${( today.getDate() ).toString().padStart( 2,'0' )}`// month 0-11 
        //console.log(formattedDate);
        //console.log(today.getMonth())
        this.meetDate.innerHTML = `<h2>${today.getDate()} ${strMonth( today.getMonth()+1 )} ${today.getFullYear()}</h2>`
        this.weekName.innerHTML = `<p>${strDay( today.getDay() )}</p>`
        this.fetchCalender( formattedDate );


        this.addEventListeners();
        initNav();

    }
}

export default Calender























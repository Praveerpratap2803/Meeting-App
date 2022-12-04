import {addAMeeting} from "../services/meetings"
import initNav from "../services/navBar"
import "../../scss/pages/Meetings.scss"
import {loadPage} from "../loadPage"

class AddAMeeting{
    
    //let cal;
    addingForm=( document.querySelector( '#addForm' ) as HTMLFormElement )

    meetNameEl= ( document.querySelector( '#meetName' ) as HTMLInputElement );
    meetDescriptionEl=( document.querySelector( '#description' ) as HTMLTextAreaElement )
    meetDateEl=( document.querySelector( '#meetAdd' ) as HTMLInputElement )
    meetStartTimeHoursEl=( document.querySelector( '#hourStart' ) as HTMLSelectElement )
    meetStartTimeMinutesEl=( document.querySelector( '#minutesStart' ) as HTMLSelectElement )
    meetEndTimeHoursEl=( document.querySelector( '#hourEnd' ) as HTMLSelectElement )
    meetEndTimeMinutesEl=( document.querySelector( '#minutesEnd' ) as HTMLSelectElement )
    meetEmailEl=( document.querySelector( '#emailIdCollection' ) as HTMLInputElement )


    validDate = () =>{
        const meetDate = this.meetDateEl.value;
        const formEl = this.meetDateEl.closest( ".formContent" ) as HTMLElement;
        const messageElement = ( formEl.querySelector( ".message" ) as HTMLElement );
        let error = "";
        messageElement.innerHTML = "";
        const today = new Date();
        const selectedDate = new Date( `${meetDate}` );
        const tday = today.getDate();
        const mDay = selectedDate.getDate();
        const tYear = today.getFullYear();
        const mYear = selectedDate.getFullYear();
        const tMonth = today.getMonth();
        const mMonth = selectedDate.getMonth();

        if ( tYear > mYear ) {
            error += "Date Should be greater than today's date";
        } else if ( tYear === mYear ) {
            if ( tMonth > mMonth ) {
                error += "Date Should be greater than today's date";
            } else if ( tMonth === mMonth ) {
                if ( tday > mDay ) {
                    error += "Date Should be greater than today's date";
                }
            }
        }

        messageElement.innerHTML = error;
        return error ==="";
    }


    validTime =()=>{
        const startHour = this.meetStartTimeHoursEl.value;
        const startMinute = this.meetStartTimeMinutesEl.value;
        const endHour = this.meetEndTimeHoursEl.value;
        const endMinute = this.meetEndTimeMinutesEl.value;
        const formEl = this.meetEndTimeHoursEl.closest( ".formContent" ) as HTMLElement;
        const messageElement = formEl.querySelector( ".message" ) as HTMLElement;
        let error = "";
        messageElement.innerHTML = "";
        const sh = parseInt( startHour, 10 );
        const sm = parseInt( startMinute, 10 );
        const eh = parseInt( endHour, 10 );
        const em = parseInt( endMinute, 10 );
        if ( sh > eh ) {
        // console.log(11);
            error += "End time should greater than start time";
        } else if ( sh === eh ) {
            if ( sm > em ) {
                error += "End time should greater than start time";
            }
        }
        messageElement.innerHTML = error;
        return error === "";
    }


    validateDate=()=>{
        let isValid = true;
        isValid = this.validDate() && isValid
        isValid = this.validTime() && isValid

        return isValid;
    }

    aMeet=()=>{
        
        ( this.meetDateEl as HTMLInputElement ).addEventListener( "blur",this.validDate );
        ( this.meetDateEl as HTMLInputElement ).addEventListener( "input",this.validDate );
        
        ( this.meetStartTimeHoursEl as HTMLSelectElement ).addEventListener( "blur",this.validTime );
        ( this.meetStartTimeHoursEl as HTMLSelectElement ).addEventListener( "input",this.validTime );

        ( this.meetStartTimeMinutesEl as HTMLSelectElement ).addEventListener( "blur",this.validTime );
        ( this.meetStartTimeMinutesEl as HTMLSelectElement ).addEventListener( "input",this.validTime );

        ( this.meetEndTimeMinutesEl as HTMLSelectElement ).addEventListener( "blur",this.validTime );
        ( this.meetEndTimeMinutesEl as HTMLSelectElement ).addEventListener( "input",this.validTime );

        ( this.meetEndTimeHoursEl as HTMLSelectElement ).addEventListener( "blur",this.validTime );
        ( this.meetEndTimeHoursEl as HTMLSelectElement ).addEventListener( "input",this.validTime );



        ( this.addingForm as HTMLFormElement ).addEventListener( 'submit',( event )=>{
            event.preventDefault();
            //console.log(document.getElementById('meetName').value)
            //console.log(parseInt( (document.getElementById('hourStart') as HTMLSelectElement).value))

            if( this.validateDate() ){
                const meetContent={
                    name: this.meetNameEl.value,
                    description: this.meetDescriptionEl.value.trim() ,
                    date: this.meetDateEl.value.trim() ,
                    startTime: {
                        
                        hours:parseInt( this.meetStartTimeHoursEl.value ),
                        minutes:parseInt( this.meetStartTimeMinutesEl.value )
                    },
                    endTime: {
                        hours:parseInt( this.meetEndTimeHoursEl.value ),
                        minutes:parseInt( this.meetEndTimeMinutesEl.value )
                    },
                    attendees:[this.meetEmailEl.value.trim()]
                }
                  
                /*  
                {
                    "name": "XT React",
                    "description": "Lecture on CSS",
                    "date": "2022-08-15",
                    "startTime": {
                        "hours": 8,
                        "minutes": 30
                    },
                    "endTime": {
                        "hours": 9,
                        "minutes": 30
                    },
                    "attendees": 
                        ["praveer@example.com"]
                    
                }
                */

            
        
                console.log( meetContent )
                addAMeeting( meetContent )
                    .then(
                        function( response ){
                            console.log( response )
                            window.alert( "Meet added" )
                            //window.location.href = '/addmeetings.html';
                            history.pushState( '','','/addmeetings.html' )
                            loadPage( location.pathname )
                        }
                    )
                    .catch( function( error ){
                        console.log( error.message );
                    }
                    )
            }else{
                alert( "Not Added , enter valid data" )
            }

        } )
        
    }
    


    //window.addEventListener('load',function(){
    load=()=>{
    
        this.aMeet();
        initNav();
    }


}

export default AddAMeeting






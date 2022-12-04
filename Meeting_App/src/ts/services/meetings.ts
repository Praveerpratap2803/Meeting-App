import { getToken } from "./auth";
import IMeetingContent from "../models/addAMeetingContent"
import ITeamContent from "../models/addATeamContent"



const viewCalender=function( formattedDate:string ){
    return fetch( `https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`,
        {
            method:"GET",
            headers: {
                // in meetings app no Bearer string is required as a prefix to the header
                'Authorization': `${getToken()}`
            }
        }
     
    )
        .then(
            function( response ){
             
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                //console.log(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`)
                //console.log(typeof(response)) this is of object type
             
                return response.json();
            }
        )    
}



const addAttendee=function( meetID:string,userID:string ){
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    
    
    return fetch( `https://mymeetingsapp.herokuapp.com/api/meetings/${meetID}?action=add_attendee&userId=${userID}`,
        {
            method: "PATCH",
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
                Authorization: `${getToken()}`,
                "Content-Type": "application/json"
            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                return "Success";
            }
        );
}

  
const addAMeeting=function( meetContent:IMeetingContent ){
    return fetch( 'https://mymeetingsapp.herokuapp.com/api/meetings',
        {
            method:"POST",
            body:JSON.stringify( meetContent ),
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            
            
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem( 'token' )}`

            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
            
                return "Success";
            }
        )  
}

  
const excuseFromMeet = function( meetID:string ){
    
    
    return fetch( `https://mymeetingsapp.herokuapp.com/api/meetings/${meetID}?action=remove_attendee`,
        {
            method: "PATCH",
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
                Authorization: `${getToken()}`,
                "Content-Type": "application/json"
            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                return "Sucess";
            }
        );
}

const searching=function( showADate:string,searchFor:string ){
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    
    
    return fetch( `https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`,
        {
            method: "GET",
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
                Authorization: `${getToken()}`,
                "Content-Type": "application/json"
            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                return response.json();
            }
        );
}

const addATeam=function( teamContent:ITeamContent ){
    return fetch( 'https://mymeetingsapp.herokuapp.com/api/teams',
        {
            method:"POST",
            //body:JSON.stringify(teamContent),
            body:JSON.stringify( teamContent ),
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            
            
                "Content-Type": "application/json",
                Authorization: `${getToken()}`

            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
            
                return "Success";
            }
        )  
}

  
const addMemberToTeam=function( teamID:string,userID:string ){
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    
    return fetch( `https://mymeetingsapp.herokuapp.com/api/teams/${teamID}?action=add_member&userId=${userID}`,
        {
            method: "PATCH",
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
                Authorization: `${getToken()}`,
                "Content-Type": "application/json"
            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                return "Success";
            }
        )
    
}


  
const excuseFromATeam= function( meetID:string ){
    
    
    return fetch( `https://mymeetingsapp.herokuapp.com/api/teams/${meetID}?action=remove_member`,
        {
            method: "PATCH",
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
                Authorization: `${getToken()}`,
                "Content-Type": "application/json"
            }
        }
        
    )
        
        .then(
            function( response ){
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
                return "Success";
            }
        );
}

  
const viewATeam=function(){
    return fetch( 'https://mymeetingsapp.herokuapp.com/api/teams',
        {
        //method:"GET",
        //body:JSON.stringify(teamContent),
            headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            
            
                "Content-Type": "application/json",
                Authorization: `${getToken()}`

            }
        }
        
    )
        
        .then(
            function( response ){
            
                if( !response.ok ){
                    throw new Error( response.statusText );
                }
            
                return response.json();
            }
        )  
}


export{
    viewCalender,
    addAttendee,
    addAMeeting,
    excuseFromMeet,
    searching,
    addATeam,
    addMemberToTeam,
    excuseFromATeam,
    viewATeam
}








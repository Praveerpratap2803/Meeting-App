
function addAttendee(meetID,userID){
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    
    
    return fetch(`https://mymeetingsapp.herokuapp.com/api/meetings/${meetID}?action=add_attendee&userId=${userID}`,
    {
        method: "PATCH",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
           
            Authorization: `${getToken()}`,
            "Content-Type": "application/json",
        },
    }
        
    )
        
    .then(
        function(response){
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return "Success";
        }
    );
}









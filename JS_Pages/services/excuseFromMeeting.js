  
function excuseFromMeet(meetID){
    
    
    return fetch(`https://mymeetingsapp.herokuapp.com/api/meetings/${meetID}?action=remove_attendee`,
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
            return "Sucess";
        }
    );
}








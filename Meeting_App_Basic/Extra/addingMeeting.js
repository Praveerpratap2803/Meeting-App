  
function addAMeeting(meetContent){
    return fetch('https://mymeetingsapp.herokuapp.com/api/meetings',
    {
        method:"POST",
        body:JSON.stringify(meetContent),
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            
            
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem( 'token' )}`,

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
    )  
}








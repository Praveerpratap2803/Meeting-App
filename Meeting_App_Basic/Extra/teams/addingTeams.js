  
function addATeam(teamContent){
    return fetch('https://mymeetingsapp.herokuapp.com/api/teams',
    {
        method:"POST",
        //body:JSON.stringify(teamContent),
        body:JSON.stringify(teamContent),
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            
            
            "Content-Type": "application/json",
            Authorization: `${getToken()}`,

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








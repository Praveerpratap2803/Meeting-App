  
function viewATeam(){
    return fetch('https://mymeetingsapp.herokuapp.com/api/teams',
    {
        //method:"GET",
        //body:JSON.stringify(teamContent),
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
            
            return response.json();
        }
    )  
}








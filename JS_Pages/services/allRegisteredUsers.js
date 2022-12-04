
function allUsers(){
    return fetch(`https://mymeetingsapp.herokuapp.com/api/users`,
        {   
            method : "GET",
            headers : {
                
                Authorization: `${getToken()}`

            }
        }
    )
    .then(
        function(response){
            if(!response.ok){
                throw new Error(response.statusText) 
            }
            return response.json()
        }
    )


    
    
}

function findUser(usersresponse) {
    usersresponse.find(function (user) {
      // let users;
      if (user.email == localStorage.getItem("email")) {
        // console.log(user._id);
  
        // users = user._id;
        localStorage.setItem("userID", user._id);
      }
    });
  }













/*
(function(){
    
    let cal;
    
    function viewCalender(){
        fetch('https://mymeetingsapp.herokuapp.com/api/calendar?date=2020-08-10',
        {
            headers: {
                // in meetings app no Bearer string is required as a prefix to the header
                'Authorization': `${getToken()}`
            }
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
        
        .then(
            function(response){
                console.log(response);
            }   
        )
        
    }


    window.addEventListener('load',function(){
        //cal=document.getElementById(showCalender)
        //showLoadingMessage();
        viewCalender();
    });
})();
*/
//The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
//The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
//
function viewCalender(formattedDate){
       return fetch(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`,
        {
            method:"GET",
            headers: {
                // in meetings app no Bearer string is required as a prefix to the header
                'Authorization': `${getToken()}`
            }
        }
        
        )
        .then(
            function(response){
                
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                //console.log(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`)
                //console.log(typeof(response)) this is of object type
                
                return response.json();
            }
        )
        
        
        
        
    }









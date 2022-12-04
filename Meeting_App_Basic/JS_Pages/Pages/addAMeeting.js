
(function(){
    
    //let cal;
    let addingForm=document.querySelector('#addForm')
    function aMeet(){
        
        addingForm.addEventListener('submit',function(event){
                event.preventDefault();
                //console.log(document.getElementById('meetName').value)
                console.log(parseInt( document.getElementById('hourStart').value))
                if(validate()){
                const meetContent={
                    name: document.getElementById('meetName').value,
                    description: document.getElementById('description').value.trim() ,
                    date: document.getElementById('meetAdd').value.trim() ,
                    startTime: {
                        
                        hours:parseInt(document.getElementById('hourStart').value),
                        minutes:parseInt(document.getElementById('minutesStart').value)
                    },
                    endTime: {
                        hours:parseInt(document.getElementById('hourEnd').value),
                        minutes:parseInt(document.getElementById('minutesEnd').value)
                    },
                    attendees:[document.getElementById('emailIdCollection').value.trim()]
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

            
        
            console.log(meetContent)
            addAMeeting(meetContent)
            .then(
                function(response){
                    console.log(response)
                    window.alert("Meet added")
                    window.location.href = '../../HTML_Pages/Meetings_Add_Meetings.html';
                }
            )
            .catch(function(error){
                console.log(error.message);
            }
            )
            }else{
                alert("Not Added , enter valid data")
            }

        })
        
    }
    


    window.addEventListener('load',function(){
        //cal=document.getElementById(showCalender)
        //showLoadingMessage();
        aMeet();
    });


})();








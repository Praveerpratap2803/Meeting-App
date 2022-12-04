

(function(){

    /*
    function showLoadingMessage(){
        calFullPage.textContent='Loading the content ...';
        calFullPage.classList.remove('hide')
    }
    */
    function showCalender(cal){
        
        const allMeet=document.querySelector('.showMeeting'); // allMeet is a dom()
        console.log(allMeet)
        //const hour8 =  document.querySelector('.hour8')//querySelector ->Returns the first element that is a descendant of node(Parent node->document) that matches selectors('.hour8'(class)) and querySelectorAll ->Returns array of all the element that is a descendant of node that matches selectors.
        //console.log(cal)//here cal is an array
        let calMeet = ''
        cal.forEach(        // here we are iterating to every element of the array using foreach       
            function(meeting){//meeting is an object(key:value pairs)
                //console.log(meeting)
                //console.log(meeting)
                let startTime = parseInt(`${meeting.startTime.hours}`);//here we selecting hours value which is inside startTime object which is inside meeting object
                let endTime = parseInt(`${meeting.endTime.hours}`);
                let duration = endTime - startTime;
                //console.log(startTime)
                let topHeight = startTime*45-48 ;//here we are giving the distance between nav and meeting(refering startTime). 48px is for displaying meeting at 0th hour and 45px increment for every hour eg startTime=8 -> 8*45 + 48
                // let meetstr=''
                // for(let i=0;i<meeting.attendees.length;i++){//here we are extracting very attendees email
                //     meetstr += meeting.attendees[i].email + '   '
                // }
                let meetstr = meeting.attendees.map(function(attendee){
                    return (attendee.email)
                }).join(', ')
                //allMeet.textContent += meeting.name
                calMeet += `
                            <div class="calender allMeet" style="position:absolute;top:${topHeight}px;height:${duration}px;color:black;z-index:4;">
                                <div style="background-color:lightgray;">
                                ${meeting.name} 
                                <br/> 
                                attendees : ${meetstr} 
                                </div>
                            </div>


                        `

            }
        )
        allMeet.innerHTML += calMeet // innerHTML convert the calMeet string into html format and store inside dom allMeet 
    }



    function addEventListeners(){ // in this function we are adding all the events handler
        const meeta=document.querySelector('#meet')
        const meetDate = document.querySelector('.rDate')
        const weekName = document.querySelector('.week')
        //console.log(meeta)
        meeta.addEventListener('input',function(){
            
            const displayDate = meeta.value//here displayDate is of type date string
            //console.log(displayDate)
            let disDate=new Date(displayDate) //So we have to convert into Date type to extract date,month,day,year
            let month = disDate.getMonth();
            let days = disDate.getDay();//here we get the day(0 to 6 acc. to mon(0) - sun(6))
            let monthString = strMonth(month);//here we are calling strMonth() function and passing the month variable value ,that we got from getMonth() inbuilt function
            let dayString = strDay(days)
            let sendDate=displayDate.toString() //then again convert into string , so that we can pass to fetchCalender function
            //console.log( sendDate)
            meetDate.innerHTML = `<p>${disDate.getDate()}  ${monthString}  ${disDate.getFullYear()}</p>
                                    
                                `
            weekName.innerHTML = `<p>${dayString}</p>

                                `
            fetchCalender(sendDate);

        })
    }

    function strMonth(month){
        let monthString;
        if (month === 0) {
        monthString = "January";
        } else if (month === 1) {
        monthString = "February";
        } else if (month === 2) {
        monthString = "March";
        } else if (month === 3) {
        monthString = "April";
        } else if (month === 4) {
        monthString = "May";
        } else if (month === 5) {
        monthString = "June";
        } else if (month === 6) {
        monthString = "July";
        } else if (month === 7) {
        monthString = "August";
        } else if (month === 8) {
        monthString = "September";
        } else if (month === 9) {
        monthString = "October";
        } else if (month === 10) {
        monthString = "November";
        } else if (month === 11) {
        monthString = "December";
        }
        return monthString;
    }
    function strDay(days){
        let dayString;
        if (days === 0) {
            dayString = "Sunday";
          } else if (days === 1) {
            dayString = "Monday";
          } else if (days === 2) {
            dayString = "Tuesday";
          } else if (days === 3) {
            dayString = "Wednesday";
          } else if (days === 4) {
            dayString = "Thursday";
          } else if (days === 5) {
            dayString = "Friday";
          } else if (days === 6) {
            dayString = "Saturday";
          }
          return dayString;
    }
    function fetchCalender(formattedDate){
        //calStr = '';
        viewCalender(formattedDate)
        .then(
            function(meet){//passing the json file(here which is of object type) in the function , which was received from viewCalender function (when every thing was resolved )
                //console.log(typeof(meet)) is of object type (which is array object  ) and inside array there is number of object , meet=[{},{},{},...]
               // console.log(meet)
                return meet;
                //showCalender(meet)
            }
            
        )
        .then(showCalender)
    }

    window.addEventListener('load',function(){
        
        calFullPage=document.querySelector('.calender')
        const meeta=document.querySelector('#meet')
        const meetDate = document.querySelector('.rDate')
        const weekName = document.querySelector('.week')


        //idd=document.querySelector('.id')
        //idd.textContent = getEmail();
        //showLoadingMessage();
        const today = new Date();
        //const formattedDate = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDay()}`
        const formattedDate = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${(today.getDate()).toString().padStart(2,'0')}`// month 0-11 
        //console.log(formattedDate);
        //console.log(today.getMonth())
        meetDate.innerHTML = `<p>${today.getDate()} ${strMonth(today.getMonth()+1)} ${today.getFullYear()}</p>`
        weekName.innerHTML = `<p>${strDay( today.getDay())}</p>`
        fetchCalender(formattedDate);


        addEventListeners();


    });
})();

























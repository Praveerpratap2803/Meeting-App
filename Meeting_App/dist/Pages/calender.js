import { viewCalender } from "../services/meetings";
import initNav from "../services/navBar";
var Calender = /** @class */ (function () {
    function Calender() {
        var _this = this;
        this.meeta = document.querySelector('#meet');
        this.meetDate = document.querySelector('.rDate');
        this.weekName = document.querySelector('.week');
        /*
        function showLoadingMessage(){
            calFullPage.textContent='Loading the content ...';
            calFullPage.classList.remove('hide')
        }
        */
        this.showCalender = function (cal) {
            var allMeet = document.querySelector('.showMeeting'); // allMeet is a dom()
            console.log(allMeet);
            //const hour8 =  document.querySelector('.hour8')//querySelector ->Returns the first element that is a descendant of node(Parent node->document) that matches selectors('.hour8'(class)) and querySelectorAll ->Returns array of all the element that is a descendant of node that matches selectors.
            //console.log(cal)//here cal is an array
            var calMeet = '';
            cal.forEach(// here we are iterating to every element of the array using foreach       
            function (meeting) {
                //console.log(meeting)
                //console.log(meeting)
                var startTime = parseInt("".concat(meeting.startTime.hours)); //here we selecting hours value which is inside startTime object which is inside meeting object
                var endTime = parseInt("".concat(meeting.endTime.hours));
                var duration = endTime - startTime;
                //console.log(startTime)
                var topHeight = startTime * 45 - 48; //here we are giving the distance between nav and meeting(refering startTime). 48px is for displaying meeting at 0th hour and 45px increment for every hour eg startTime=8 -> 8*45 + 48
                var meetstr = meeting.attendees.map(function (attendee) {
                    return (attendee.email);
                }).join(', ');
                //allMeet.textContent += meeting.name
                calMeet += "\n                            <div class=\"calender allMeet\" style=\"position:absolute;top:".concat(topHeight, "px;height:").concat(duration, "px;color:black;z-index:4;\">\n                                <div style=\"background-color:lightgray;\">\n                                ").concat(meeting.name, " \n                                <br/> \n                                attendees : ").concat(meetstr, " \n                                </div>\n                            </div>\n\n\n                        ");
            });
            allMeet.innerHTML += calMeet; // innerHTML convert the calMeet string into html format and store inside dom allMeet 
        };
        this.addEventListeners = function () {
            // const meeta=document.querySelector('#meet')
            // const meetDate = document.querySelector('.rDate')
            // const weekName = document.querySelector('.week')
            //console.log(meeta)
            _this.meeta.addEventListener('input', function () {
                var displayDate = _this.meeta.value; //here displayDate is of type date string
                //console.log(displayDate)
                var disDate = new Date(displayDate); //So we have to convert into Date type to extract date,month,day,year
                var month = disDate.getMonth();
                var days = disDate.getDay(); //here we get the day(0 to 6 acc. to mon(0) - sun(6))
                var monthString = _this.strMonth(month); //here we are calling strMonth() function and passing the month variable value ,that we got from getMonth() inbuilt function
                var dayString = _this.strDay(days);
                var sendDate = displayDate.toString(); //then again convert into string , so that we can pass to fetchCalender function
                //console.log( sendDate)
                _this.meetDate.innerHTML = "<p>".concat(disDate.getDate(), "  ").concat(monthString, "  ").concat(disDate.getFullYear(), "</p>\n                                    \n                                ");
                _this.weekName.innerHTML = "<p>".concat(dayString, "</p>\n\n                                ");
                _this.fetchCalender(sendDate);
            });
        };
        //window.addEventListener('load',function(){
        this.load = function () {
            //calFullPage=document.querySelector('.calender')
            // const meeta=document.querySelector('#meet')
            // const meetDate = document.querySelector('.rDate')
            // const weekName = document.querySelector('.week')
            //idd=document.querySelector('.id')
            //idd.textContent = getEmail();
            //showLoadingMessage();
            var today = new Date();
            //const formattedDate = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDay()}`
            var formattedDate = "".concat(today.getFullYear(), "-").concat((today.getMonth() + 1).toString().padStart(2, '0'), "-").concat((today.getDate()).toString().padStart(2, '0')); // month 0-11 
            //console.log(formattedDate);
            //console.log(today.getMonth())
            _this.meetDate.innerHTML = "<p>".concat(today.getDate(), " ").concat(_this.strMonth(today.getMonth() + 1), " ").concat(today.getFullYear(), "</p>");
            _this.weekName.innerHTML = "<p>".concat(_this.strDay(today.getDay()), "</p>");
            _this.fetchCalender(formattedDate);
            _this.addEventListeners();
            initNav();
        };
    }
    Calender.prototype.strMonth = function (month) {
        var monthString;
        if (month === 0) {
            monthString = "January";
        }
        else if (month === 1) {
            monthString = "February";
        }
        else if (month === 2) {
            monthString = "March";
        }
        else if (month === 3) {
            monthString = "April";
        }
        else if (month === 4) {
            monthString = "May";
        }
        else if (month === 5) {
            monthString = "June";
        }
        else if (month === 6) {
            monthString = "July";
        }
        else if (month === 7) {
            monthString = "August";
        }
        else if (month === 8) {
            monthString = "September";
        }
        else if (month === 9) {
            monthString = "October";
        }
        else if (month === 10) {
            monthString = "November";
        }
        else if (month === 11) {
            monthString = "December";
        }
        return monthString;
    };
    Calender.prototype.strDay = function (days) {
        var dayString;
        if (days === 0) {
            dayString = "Sunday";
        }
        else if (days === 1) {
            dayString = "Monday";
        }
        else if (days === 2) {
            dayString = "Tuesday";
        }
        else if (days === 3) {
            dayString = "Wednesday";
        }
        else if (days === 4) {
            dayString = "Thursday";
        }
        else if (days === 5) {
            dayString = "Friday";
        }
        else if (days === 6) {
            dayString = "Saturday";
        }
        return dayString;
    };
    Calender.prototype.fetchCalender = function (formattedDate) {
        //calStr = '';
        viewCalender(formattedDate)
            .then(function (meet) {
            //console.log(typeof(meet)) is of object type (which is array object  ) and inside array there is number of object , meet=[{},{},{},...]
            // console.log(meet)
            return meet;
        })
            .then(this.showCalender);
    };
    return Calender;
}());
export default Calender;
//# sourceMappingURL=calender.js.map
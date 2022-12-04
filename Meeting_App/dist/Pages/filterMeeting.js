import { addAttendee, excuseFromMeet, searching } from "../services/meetings";
import initNav from "../services/navBar";
var SearchMeeting = /** @class */ (function () {
    function SearchMeeting() {
        //let cal;
        var _this = this;
        this.showSearchMeeting = function (meets) {
            var meetingList = document.querySelector(".matchingMeets");
            //console.log(meets)
            var meetingListStr = " ";
            meets.forEach(function (meetings) {
                //console.log(meetings)
                var dat = new Date("".concat(meetings.date));
                var dateString = dat.getDate();
                var month = dat.getMonth();
                var monthString = _this.Month(month);
                var year = dat.getFullYear();
                var hourStart = meetings.startTime.hours;
                var hourEnd = meetings.endTime.hours;
                var minuteStart = meetings.startTime.minutes;
                var minuteEnd = meetings.endTime.minutes;
                // let attendesStr = "";
                // for (let i = 0; i < meetings.attendees.length; i++) {
                // attendesStr += meetings.attendees[i].email + "   ";
                // }
                var meetstr = meetings.attendees.map(function (attendee) {
                    return (attendee.email);
                }).join(', ');
                //meetingListStr =''
                meetingListStr += "\n                    <div class=\"meetSep\" meetID=\"".concat(meetings._id, "\">\n                        <div class=\"excusePart\">\n                            <span class=\"meetDateFilter\" >").concat(dateString, " ").concat(monthString, " ").concat(year, "</span>\n                            <span class=\"meetTimeFilter\" >").concat(hourStart.toString().padStart(2, "0"), ":\n                                    ").concat(minuteStart.toString().padStart(2, "0"), " - \n                                    ").concat(hourEnd.toString().padStart(2, "0"), ":\n                                    ").concat(minuteEnd.toString().padStart(2, "0"), "</span> \n                            \n                            \n                        \n\n                            <div class=\"meetNameFilter\" >").concat(meetings.name, " </div>\n                            <button class=\"excuseBtn\">Excuse yourself</button>\n                        </div>\n                        <hr>\n                        <div class=\"strAttendees\" ><b>Attendees:</b> ").concat(meetstr, " </div>\n                        <form action=\"https://mymeetingsapp.herokuapp.com/api/meetings\" method=\"patch\" class=\"addMemberForm\">\n                            <div class=\"addMemberContent\" >\n                            <label for=\"addMember\"></label>\n                            <select class=\"addMember\" name=\"attendee\">\n                                <option value=\"\">Select member</option>\n                                <option value=\"62f0cc77ad71500015c8be4a\">sumedh@example.com</option>\n                                <option value=\"62f1d658550f0200158115a7\">ankitawaghmare@publicis.com</option>\n                                <option value=\"62f0cb8ead71500015c8be3c\">basavaraj@example.com</option>\n                            </select>\n                            </div>\n                            <button type=\"submit\" class=\"addMemberButton\">Add</button>\n                        </form>\n                    </div>\n                \n                ");
            });
            meetingList.innerHTML = meetingListStr;
            _this.deleteMeeting();
            _this.addingMember();
        };
        this.addingMember = function () {
            var addFormContents = document.querySelectorAll(".addMemberForm");
            console.log(addFormContents);
            addFormContents.forEach(function (addFormContent) {
                var selectMember = addFormContent.querySelector(".addMember");
                addFormContent.addEventListener("submit", function (event) {
                    event.preventDefault();
                    var userID = selectMember.value;
                    //console.log(userID);
                    var meet = addFormContent.closest(".meetSep");
                    var meetID = meet.getAttribute("meetID");
                    //console.log(meetID)
                    addAttendee(meetID, userID)
                        .then(function () {
                        console.log("Success");
                        window.alert("Added a member ");
                    })
                        .catch(function (error) {
                        console.log(error.message);
                    });
                });
            });
        };
        this.deleteMeeting = function () {
            var buttons = document.querySelectorAll(".excuseBtn");
            buttons.forEach(function (button) {
                button.addEventListener("click", function () {
                    var deleteMeet = button.closest(".meetSep"); //Returns the first (starting at element(button)) inclusive ancestor that matches selectors(here selector is .meetSep class , that ancestor have .meetSep class)
                    //console.log(deleteMeet)
                    var meetID = deleteMeet.getAttribute("meetID"); //getAttribute help to get the vaule from dom having attribute meetID (meetID="${meetings._id}")
                    //console.log(meetID);
                    excuseFromMeet(meetID)
                        .then(function (response) {
                        console.log(response);
                        deleteMeet.remove(); //remove will remove that(deleteMeet) node
                    })
                        .catch(function (error) {
                        console.log(error.message);
                    });
                });
            });
        };
        this.searchMeet = function (showADate, searchFor) {
            console.log(showADate);
            console.log(searchFor);
            searching(showADate, searchFor)
                .then(function (response) {
                //console.log(response);
                return response;
            })
                .then(_this.showSearchMeeting);
        };
        this.addEventListeners = function () {
            var searchForm = document.querySelector('#searchForm');
            var searchDate = document.querySelector('#date');
            var searchWord = document.querySelector('#description');
            searchForm.addEventListener('submit', function (event) {
                event.preventDefault();
                var showADate = searchDate.value;
                var searchFor = searchWord.value.trim();
                //console.log(showADate)
                //console.log(searchFor)
                _this.searchMeet(showADate, searchFor);
            });
        };
        //window.addEventListener('load',function(){
        this.load = function () {
            //cal=document.getElementById(showCalender)
            //showLoadingMessage();
            _this.addEventListeners();
            initNav();
            //searchMeet();m
        };
    }
    SearchMeeting.prototype.Month = function (month) {
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
    return SearchMeeting;
}());
export default SearchMeeting;
//# sourceMappingURL=filterMeeting.js.map
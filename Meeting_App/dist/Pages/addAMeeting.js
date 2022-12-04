import { addAMeeting } from "../services/meetings";
import initNav from "../services/navBar";
var AddAMeeting = /** @class */ (function () {
    function AddAMeeting() {
        var _this = this;
        //let cal;
        this.addingForm = document.querySelector('#addForm');
        this.meetNameEl = document.querySelector('#meetName');
        this.meetDescriptionEl = document.querySelector('#description');
        this.meetDateEl = document.querySelector('#meetAdd');
        this.meetStartTimeHoursEl = document.querySelector('#hourStart');
        this.meetStartTimeMinutesEl = document.querySelector('#minutesStart');
        this.meetEndTimeHoursEl = document.querySelector('#hourEnd');
        this.meetEndTimeMinutesEl = document.querySelector('#minutesEnd');
        this.meetEmailEl = document.querySelector('#emailIdCollection');
        this.validDate = function () {
            var meetDate = _this.meetDateEl.value;
            var formEl = _this.meetDateEl.closest(".formContent");
            var messageElement = formEl.querySelector(".message");
            var error = "";
            messageElement.innerHTML = "";
            var today = new Date();
            var selectedDate = new Date("".concat(meetDate));
            var tday = today.getDate();
            var mDay = selectedDate.getDate();
            var tYear = today.getFullYear();
            var mYear = selectedDate.getFullYear();
            var tMonth = today.getMonth();
            var mMonth = selectedDate.getMonth();
            if (tYear > mYear) {
                error += "Date Should be greater than today's date";
            }
            else if (tYear === mYear) {
                if (tMonth > mMonth) {
                    error += "Date Should be greater than today's date";
                }
                else if (tMonth === mMonth) {
                    if (tday > mDay) {
                        error += "Date Should be greater than today's date";
                    }
                }
            }
            messageElement.innerHTML = error;
            return error === "";
        };
        this.validTime = function () {
            var startHour = _this.meetStartTimeHoursEl.value;
            var startMinute = _this.meetStartTimeMinutesEl.value;
            var endHour = _this.meetEndTimeHoursEl.value;
            var endMinute = _this.meetEndTimeMinutesEl.value;
            var formEl = _this.meetEndTimeHoursEl.closest(".formContent");
            var messageElement = formEl.querySelector(".message");
            var error = "";
            messageElement.innerHTML = "";
            var sh = parseInt(startHour, 10);
            var sm = parseInt(startMinute, 10);
            var eh = parseInt(endHour, 10);
            var em = parseInt(endMinute, 10);
            if (sh > eh) {
                // console.log(11);
                error += "End time should greater than start time";
            }
            else if (sh === eh) {
                if (sm > em) {
                    error += "End time should greater than start time";
                }
            }
            messageElement.innerHTML = error;
            return error === "";
        };
        this.validateDate = function () {
            var isValid = true;
            isValid = _this.validDate() && isValid;
            isValid = _this.validTime() && isValid;
            return isValid;
        };
        this.aMeet = function () {
            _this.meetDateEl.addEventListener("blur", _this.validDate);
            _this.meetDateEl.addEventListener("input", _this.validDate);
            _this.meetStartTimeHoursEl.addEventListener("blur", _this.validTime);
            _this.meetStartTimeHoursEl.addEventListener("input", _this.validTime);
            _this.meetStartTimeMinutesEl.addEventListener("blur", _this.validTime);
            _this.meetStartTimeMinutesEl.addEventListener("input", _this.validTime);
            _this.meetEndTimeMinutesEl.addEventListener("blur", _this.validTime);
            _this.meetEndTimeMinutesEl.addEventListener("input", _this.validTime);
            _this.meetEndTimeHoursEl.addEventListener("blur", _this.validTime);
            _this.meetEndTimeHoursEl.addEventListener("input", _this.validTime);
            _this.addingForm.addEventListener('submit', function (event) {
                event.preventDefault();
                //console.log(document.getElementById('meetName').value)
                //console.log(parseInt( (document.getElementById('hourStart') as HTMLSelectElement).value))
                if (_this.validateDate()) {
                    var meetContent = {
                        name: _this.meetNameEl.value,
                        description: _this.meetDescriptionEl.value.trim(),
                        date: _this.meetDateEl.value.trim(),
                        startTime: {
                            hours: parseInt(_this.meetStartTimeHoursEl.value),
                            minutes: parseInt(_this.meetStartTimeMinutesEl.value)
                        },
                        endTime: {
                            hours: parseInt(_this.meetEndTimeHoursEl.value),
                            minutes: parseInt(_this.meetEndTimeMinutesEl.value)
                        },
                        attendees: [_this.meetEmailEl.value.trim()]
                    };
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
                    console.log(meetContent);
                    addAMeeting(meetContent)
                        .then(function (response) {
                        console.log(response);
                        window.alert("Meet added");
                        window.location.href = '../../HTML_Pages/Meetings_Add_Meetings.html';
                    })
                        .catch(function (error) {
                        console.log(error.message);
                    });
                }
                else {
                    alert("Not Added , enter valid data");
                }
            });
        };
        //window.addEventListener('load',function(){
        this.load = function () {
            _this.aMeet();
            initNav();
        };
    }
    return AddAMeeting;
}());
export default AddAMeeting;
//# sourceMappingURL=addAMeeting.js.map
import { getToken } from "./auth";
var viewCalender = function (formattedDate) {
    return fetch("https://mymeetingsapp.herokuapp.com/api/calendar?date=".concat(formattedDate), {
        method: "GET",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            'Authorization': "".concat(getToken())
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        //console.log(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`)
        //console.log(typeof(response)) this is of object type
        return response.json();
    });
};
var addAttendee = function (meetID, userID) {
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    return fetch("https://mymeetingsapp.herokuapp.com/api/meetings/".concat(meetID, "?action=add_attendee&userId=").concat(userID), {
        method: "PATCH",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            Authorization: "".concat(getToken()),
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Success";
    });
};
var addAMeeting = function (meetContent) {
    return fetch('https://mymeetingsapp.herokuapp.com/api/meetings', {
        method: "POST",
        body: JSON.stringify(meetContent),
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            "Content-Type": "application/json",
            Authorization: "".concat(localStorage.getItem('token')),
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Success";
    });
};
var excuseFromMeet = function (meetID) {
    return fetch("https://mymeetingsapp.herokuapp.com/api/meetings/".concat(meetID, "?action=remove_attendee"), {
        method: "PATCH",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            Authorization: "".concat(getToken()),
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Sucess";
    });
};
var searching = function (showADate, searchFor) {
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    return fetch("https://mymeetingsapp.herokuapp.com/api/meetings?period=".concat(showADate, "&search=").concat(searchFor), {
        method: "GET",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            Authorization: "".concat(getToken()),
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
};
var addATeam = function (teamContent) {
    return fetch('https://mymeetingsapp.herokuapp.com/api/teams', {
        method: "POST",
        //body:JSON.stringify(teamContent),
        body: JSON.stringify(teamContent),
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            "Content-Type": "application/json",
            Authorization: "".concat(getToken()),
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Success";
    });
};
var addMemberToTeam = function (teamID, userID) {
    //console.log(showADate,searchFor);
    //console.log(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${showADate}&search=${searchFor}`)
    return fetch("https://mymeetingsapp.herokuapp.com/api/teams/".concat(teamID, "?action=add_member&userId=").concat(userID), {
        method: "PATCH",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            Authorization: "".concat(getToken()),
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Success";
    });
};
var excuseFromATeam = function (meetID) {
    return fetch("https://mymeetingsapp.herokuapp.com/api/teams/".concat(meetID, "?action=remove_member"), {
        method: "PATCH",
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            Authorization: "".concat(getToken()),
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return "Success";
    });
};
var viewATeam = function () {
    return fetch('https://mymeetingsapp.herokuapp.com/api/teams', {
        //method:"GET",
        //body:JSON.stringify(teamContent),
        headers: {
            // in meetings app no Bearer string is required as a prefix to the header
            "Content-Type": "application/json",
            Authorization: "".concat(getToken()),
        },
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
};
export { viewCalender, addAttendee, addAMeeting, excuseFromMeet, searching, addATeam, addMemberToTeam, excuseFromATeam, viewATeam };
//# sourceMappingURL=meetings.js.map
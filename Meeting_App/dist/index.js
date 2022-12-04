import Login from "./Pages/login";
import Register from "./Pages/registration";
import Calender from "./Pages/calender";
import SearchMeeting from "./Pages/filterMeeting";
import AddAMeeting from "./Pages/addAMeeting";
import Team from "./Pages/teams";
var routes = {
    "./login.html": {
        template: 'loginT',
        Controller: Login
    },
    "./register.html": {
        template: 'registerT',
        Controller: Register
    },
    "./calender.html": {
        template: 'calenderT',
        Controller: Calender
    },
    "./addmeetings.html": {
        template: 'addMeetingsT',
        Controller: AddAMeeting
    },
    "./searchmeetings.html": {
        template: 'filterMeetingsT',
        Controller: SearchMeeting
    },
    "./teams.html": {
        template: 'teamsT',
        Controller: Team
    },
    '*': {
        template: 'page-not-found',
        Controller: null
    }
};
var setupLinks = function () {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var nextPageUrl = link.getAttribute('href');
            history.pushState('', '', nextPageUrl);
            loadPage(location.pathname);
        });
    });
};
var loadPage = function (pathname) {
    var route;
    if (pathname in routes) {
        route = routes[pathname];
    }
    if (route === null || route === void 0 ? void 0 : route.template) {
        var root = document.getElementById('root');
        var tpl = document.getElementById(route.template).innerHTML;
        root.innerHTML = tpl;
    }
    if (route === null || route === void 0 ? void 0 : route.Controller) {
        (new route.Controller()).load();
        setupLinks();
    }
};
loadPage(location.pathname);
//# sourceMappingURL=index.js.map
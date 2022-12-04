import { addATeam, addMemberToTeam, excuseFromATeam, viewATeam } from "../services/meetings";
import initNav from "../services/navBar";
var Team = /** @class */ (function () {
    function Team() {
        var _this = this;
        this.showTeams = function (teams) {
            var teamContainer = document.querySelector(".teamsContent");
            //console.log(teamContainer);
            var teamListStr = "";
            teams.forEach(function (team) {
                //console.log(team);
                //console.log(team.members[1])
                // let memberStr="";
                // for(let i=0;i<team.members.length;i++){
                //     memberStr += team.members[i].email + "  ";
                //     //console.log(memberStr)
                // }
                var meetstr = team.members.map(function (member) {
                    return (member.email);
                }).join(', ');
                //console.log(memberStr)
                teamListStr += "\n                <div class=\"boxContainer\" teamID=\"".concat(team._id, "\">\n                    <div class=\"matchMeet\">\n                        <div class=\"excusePart\">\n                            <div class=\"teamName\" >").concat(team.name, " </div>\n                            <div class=\"shortName\" >@").concat(team.shortName, " </div>\n                            <p>").concat(team.description, "</p>\n\n                            <button class=\"excuseBtn\">Excuse yourself</button>\n                        </div>\n                        <hr/>\n                        \n                        <p class=\"memberTeams\"><b>Members : </b>").concat(meetstr, "</p>\n                        <form action=\"https://mymeetingsapp.herokuapp.com/api/teams\" method=\"PATCH\" class=\"addMemberForm\">\n                            <div class=\"addMemberContent\" >\n                            <label for=\"addMembers\" class=\"visually-hidden\">Add Member</label>\n                            <select class=\"addMembers\" name=\"addMembers\">\n                                \n                                <option value=\"\">Select member</option>\n                                <option value=\"62f0cc77ad71500015c8be4a\">sumedh@example.com</option>\n                                <option value=\"62f1d658550f0200158115a7\">ankitawaghmare@publicis.com</option>\n                                <option value=\"62f0cb8ead71500015c8be3c\">basavaraj@example.com</option>\n                                <option value=\"62fe2d05f950b50015b62437\">anshu@example.com</option>\n                                <option value=\"62f5d7d554002f00158ac9b2\">tejveer@example.com</option>\n                                \n                                \n                            </select>\n                            </div>\n                            <button type=\"submit\" class=\"addMemberButton\">Add</button>\n                        </form>\n                        \n                    \n                    \n                    </div>\n                </div>\n            ");
                //teamContainer.innerHTML = teamListStr
            });
            teamListStr += "\n            <div class=\"boxContainer\">\n                <div id=\"plusSign\">\n                    \n                    <img src=\"../../Image/plus-solid (1).svg\" alt=\"Plus Sign\">\n\n                </div>\n                \n                <div class=\"addTeamForm\" id=\"addFormId\">\n                    \n                    <form action=\"\"  id=\"addTm>\n\n                        <label for=\"teamName\" ></label>\n                        <input\n                            type=\"text\"\n                            id=\"teamName\"\n                            name=\"teamName\"\n                            placeholder=\"Team name\"\n                        />\n                        <label for=\"teamShortName\"></label>\n                        <input\n                            type=\"text\"\n                            id=\"teamShortName\"\n                            name=\"teamShortName\"\n                            placeholder=\"Team short name\"\n                        />\n                        <label for=\"teamDescription\"></label>\n                        <textarea\n                            rows=\"3\"\n                            cols=\"30\"\n                            id=\"teamDescription\"\n                            name=\"teamDescription\"\n                            placeholder=\"Provide a description for the team\"\n                        ></textarea>\n                        <hr/>\n                        <p class=\"memberTeams\"><b>Members:</b></p>\n                        <form action=\"https://mymeetingsapp.herokuapp.com/api/teams\" method=\"post\" class=\"addMemberForm\">\n                            <div class=\"addMemberContent\" >\n                                <label for=\"addMember\"></label>\n                                <select class=\"addMember\" name=\"addMember\" id=\"addMemAddForm\">\n                                    \n                                    <option value=\"\">Select member</option>\n                                    <option value=\"sumedh@example.com\">sumedh@example.com</option>\n                                    <option value=\"ankitawaghmare@publicis.com\">ankitawaghmare@publicis.com</option>\n                                    <option value=\"basavaraj@example.com\">basavaraj@example.com</option>\n                                    <option value=\"anshu@example.com\">anshu@example.com</option>\n                                    <option value=\"tejveer@example.com\">tejveer@example.com</option>\n\n\n                                </select>\n                            </div>\n                            <button type=\"submit\" class=\"addMemberButton\">Add</button>\n                        </form>\n                        <button type=\"submit\" id=\"addTeamButton\">Add Team</button>\n                    </form>\n                </div>\n            </div>\n\n        ";
            teamContainer.innerHTML = teamListStr;
            var form = document.getElementById("addFormId");
            form.classList.add("hide");
            var plusSign = document.querySelector("#plusSign");
            plusSign.addEventListener("click", function () {
                var sign = document.getElementById("plusSign");
                sign.classList.add("hide");
                form.classList.remove("hide");
            });
            //getAllUsers();
            _this.deleteMeeting();
            _this.addingTeam();
            _this.addingMember();
        };
        /*
        function viewAllUsers(event){
            //console.log(event)
            let selectMem = document.querySelectorAll(".addMembers")
            let allRegUsers=event;
            console.log(selectMem)
            selectMem.forEach(function(){
                let allRegUsersStr="";
                allRegUsers.forEach(function(user){
                    allRegUsersStr += `<option value="${user.email}">${user.email}</option>`
                    
                })
                console.log(allRegUsersStr)
                selectMem.innerHTML += allRegUsersStr
            })
        }
        function getAllUsers(){
            const user = document.querySelector(".addMembers");
            
            allUsers()
                .then(function(response){
                    return response;
                })
                .then(function(event){
                    //console.log(event)
                    allRegUsers = event;
                    //viewAllUsers(event)
                    //let allRegUsersStr="";
                })
            
        }
        */
        this.addingTeam = function () {
            var addTeamForm = document.querySelector('#addTeamButton');
            var member = document.querySelector(".addMember");
            var addFormTm = document.querySelector("#addTm");
            console.log(addFormTm);
            addTeamForm.addEventListener("click", function (event) {
                //event.preventDefault();
                var memberSelected = member.value;
                console.log(memberSelected);
                var teamContent = {
                    name: document.querySelector("#teamName").value.trim(),
                    shortName: document.querySelector("#teamShortName").value.trim(),
                    description: document.querySelector("#teamDescription").value.trim(),
                    members: [memberSelected]
                };
                console.log(teamContent);
                /*
                teamContent={
                    "name": "CSS",
                    "shortName": "XT React",
                    "description": "Training team ",
                    "members": [
                        
                        
                        {
                            "userId": "62de099413ea0100153610b6",
                            "email": "avilash257@example.com"
                        },
                        {
                                "userId": "123456789012345678901235",
                                "email": "kajol@example.com"
                        }
                    ]
                }
                */
                addATeam(teamContent)
                    .then(function (response) {
                    console.log(response);
                    alert("Team Added");
                    window.location.href = '../../HTML_Pages/Teams.html';
                });
            });
        };
        this.addingMember = function () {
            var addMemberForms = document.querySelectorAll(".addMemberForm");
            addMemberForms.forEach(function (addMemberForm) {
                var member = addMemberForm.querySelector(".addMembers");
                addMemberForm.addEventListener('submit', function (event) {
                    event.preventDefault();
                    var userID = member.value;
                    console.log(userID);
                    var teamD = addMemberForm.closest(".boxContainer");
                    var teamID = teamD.getAttribute("teamID");
                    console.log(teamID);
                    addMemberToTeam(teamID, userID)
                        .then(function (response) {
                        alert("member added");
                        window.location.href = '../../HTML_Pages/Teams.html';
                        console.log(response);
                    });
                });
            });
        };
        this.deleteMeeting = function () {
            var buttons = document.querySelectorAll(".excuseBtn");
            buttons.forEach(function (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();
                    var deleteMeet = button.closest(".boxContainer"); //Returns the first (starting at element(button)) inclusive ancestor that matches selectors(here selector is .meetSep class , that ancestor have .meetSep class)
                    console.log(deleteMeet);
                    var teamID = deleteMeet.getAttribute("teamID"); //getAttribute help to get the vaule from dom having attribute teamID (teamID="${team._id}")
                    console.log(teamID);
                    excuseFromATeam(teamID)
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
        this.fetchingTeams = function () {
            viewATeam()
                .then(function (response) {
                //console.log(typeof(response)) it is an object
                console.log(response);
                return response;
            })
                .then(_this.showTeams);
        };
        //window.addEventListener("load",function(){
        this.load = function () {
            _this.fetchingTeams();
            initNav();
        };
    }
    return Team;
}());
export default Team;
//# sourceMappingURL=teams.js.map
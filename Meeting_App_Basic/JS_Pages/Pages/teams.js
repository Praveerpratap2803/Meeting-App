(function(){
    
    function showTeams(teams){
        const teamContainer = document.querySelector(".teamsContent")
        //console.log(teamContainer);
        
        let teamListStr = ""; 
         
        teams.forEach(    
            function(team){
            //console.log(team);
            let memberStr="";
            //console.log(team.members[1])
            for(let i=0;i<team.members.length;i++){
                memberStr += team.members[i].email + "  ";
                //console.log(memberStr)
            }
            //console.log(memberStr)
            teamListStr += `
                <div class="boxContainer" teamID="${team._id}">
                    <div class="matchMeet">
                        <div class="excusePart">
                            <div class="teamName" >${team.name} </div>
                            <div class="shortName" >@${team.shortName} </div>
                            <p>${team.description}</p>

                            <button class="excuseBtn">Excuse yourself</button>
                        </div>
                        <hr/>
                        
                        <p class="memberTeams"><b>Members : </b>${memberStr}</p>
                        <form action="https://mymeetingsapp.herokuapp.com/api/teams" method="PATCH" class="addMemberForm">
                            <div class="addMemberContent" >
                            <label for="addMembers" class="visually-hidden">Add Member</label>
                            <select class="addMembers" name="addMembers">
                                
                                <option value="">Select member</option>
                                <option value="62f0cc77ad71500015c8be4a">sumedh@example.com</option>
                                <option value="62f1d658550f0200158115a7">ankitawaghmare@publicis.com</option>
                                <option value="62f0cb8ead71500015c8be3c">basavaraj@example.com</option>
                                <option value="62fe2d05f950b50015b62437">anshu@example.com</option>
                                <option value="62f5d7d554002f00158ac9b2">tejveer@example.com</option>
                                
                                
                            </select>
                            </div>
                            <button type="submit" class="addMemberButton">Add</button>
                        </form>
                        
                    
                    
                    </div>
                </div>
            `


        //teamContainer.innerHTML = teamListStr
        });
        
        
        teamListStr += `
            <div class="boxContainer">
                <div id="plusSign">
                    
                    <img src="../../Image/plus-solid (1).svg" alt="Plus Sign">

                </div>
                
                <div class="addTeamForm" id="addFormId">
                    
                    <form action=""  id="addTm">

                        <label for="teamName" ></label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="Team name"
                        />
                        <label for="teamShortName"></label>
                        <input
                            type="text"
                            id="teamShortName"
                            name="teamShortName"
                            placeholder="Team short name"
                        />
                        <label for="teamDescription"></label>
                        <textarea
                            rows="3"
                            cols="30"
                            id="teamDescription"
                            name="teamDescription"
                            placeholder="Provide a description for the team"
                        ></textarea>
                        <hr/>
                        <p class="memberTeams"><b>Members:</b></p>
                        <form action="https://mymeetingsapp.herokuapp.com/api/teams" method="post" class="addMemberForm">
                            <div class="addMemberContent" >
                                <label for="addMember"></label>
                                <select class="addMember" name="addMember" id="addMemAddForm">
                                    
                                    <option value="">Select member</option>
                                    <option value="sumedh@example.com">sumedh@example.com</option>
                                    <option value="ankitawaghmare@publicis.com">ankitawaghmare@publicis.com</option>
                                    <option value="basavaraj@example.com">basavaraj@example.com</option>
                                    <option value="anshu@example.com">anshu@example.com</option>
                                    <option value="tejveer@example.com">tejveer@example.com</option>


                                </select>
                            </div>
                            <button type="submit" class="addMemberButton">Add</button>
                        </form>
                        <button type="submit" id="addTeamButton">Add Team</button>
                    </form>
                </div>
            </div>

        `
        
        teamContainer.innerHTML = teamListStr;
        const form = document.getElementById("addFormId");
        form.classList.add("hide");
        const plusSign = document.querySelector("#plusSign");
        plusSign.addEventListener("click",function(){
            let sign = document.getElementById("plusSign");
            sign.classList.add("hide")
            form.classList.remove("hide")


        })

        //getAllUsers();
        deleteMeeting();
        addingTeam();
        addingMember();
        

    }
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
    function addingTeam(){
        const addTeamForm=document.querySelector('#addTeamButton')
        const member = document.querySelector(".addMember")
        const addFormTm= document.querySelector("#addTm")
        console.log(addFormTm)
        
        addTeamForm.addEventListener("click",function(event){
            //event.preventDefault();
            const memberSelected = member.value;
            
            
            console.log(memberSelected)
            teamContent = {
                        name:document.querySelector("#teamName").value.trim(),
                        shortName:document.querySelector("#teamShortName").value.trim(),
                        description:document.querySelector("#teamDescription").value.trim(),
                        members : [memberSelected] 
                    }
            
            console.log(teamContent)
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
                .then(
                        function(response){
                            console.log(response)
                            alert("Team Added")  
                            window.location.href = '../../HTML_Pages/Teams.html';                          
                        }
                )
        })
    }

    


    function addingMember(){
        const addMemberForms= document.querySelectorAll(".addMemberForm")

        addMemberForms.forEach(function(addMemberForm){
            const  member= addMemberForm.querySelector(".addMembers") 
            addMemberForm.addEventListener('submit',function(event){
                event.preventDefault();
                const userID=member.value;
                console.log(userID)
                
                const teamD = addMemberForm.closest(".boxContainer")
                const teamID = teamD.getAttribute("teamID");
                console.log(teamID)
                addMemberToTeam(teamID,userID)
                    .then(
                        function(response){
                            alert("member added")
                            window.location.href = '../../HTML_Pages/Teams.html';
                            console.log(response);
                        }
                    )
            })

        })

    }

    function deleteMeeting(){
        const buttons = document.querySelectorAll(".excuseBtn")
        buttons.forEach(function(button){
            button.addEventListener("click",function(event){
                event.preventDefault();
                const deleteMeet = button.closest(".boxContainer");//Returns the first (starting at element(button)) inclusive ancestor that matches selectors(here selector is .meetSep class , that ancestor have .meetSep class)
                console.log(deleteMeet)
                const teamID = deleteMeet.getAttribute("teamID")//getAttribute help to get the vaule from dom having attribute teamID (teamID="${team._id}")
                console.log(teamID);
                
                excuseFromATeam(teamID)
                .then(
                    function(response){
                        console.log(response);
                        
                        deleteMeet.remove();//remove will remove that(deleteMeet) node
                        
                    }
                )
                
                .catch(function(error){
                    console.log(error.message)
                })
                

                
            })
        })
    }








    function fetchingTeams(){
        viewATeam()
            .then(
                function(response){
                    //console.log(typeof(response)) it is an object
                    console.log(response)
                    return response;
            })
            .then(showTeams)
    }


    window.addEventListener("load",function(){
        
        fetchingTeams();
                
        
        
    })



})();






























import Teams,{Member} from "../models/addATeamContent"
import {addATeam,addMemberToTeam,excuseFromATeam,viewATeam} from "../services/meetings"
import initNav from "../services/navBar"
import "../../scss/pages/Teams.scss"
import {loadPage} from "../loadPage"

class Team{
    



    showTeams=( teams:Teams[] )=>{
        const teamContainer = document.querySelector( ".teamsContent" ) as HTMLElement
        //console.log(teamContainer);
        
        let teamListStr = ""; 
         
        teams.forEach(    
            function( team ){
            //console.log(team);
            //console.log(team.members[1])
            // let memberStr="";
            // for(let i=0;i<team.members.length;i++){
            //     memberStr += team.members[i].email + "  ";
            //     //console.log(memberStr)
            // }
                const meetstr = team.members.map( function( member ){
                    return ( ( member as Member ).email )
                } ).join( ', ' )
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
                        
                        <p class="memberTeams"><b>Members : </b>${meetstr}</p>
                        <form action="https://mymeetingsapp.herokuapp.com/api/teams" method="PATCH" class="addMemberForm">
                            <div class="addMemberContent" >
                            
                            <select class="addMembers" name="addMembers" aria-label="Add Member to a team">
                                
                                <option value="">Select member</option>
                                <option value="632b2fad35044700152f25c3">sumedh@example.com</option>
                                <option value="632abdd7835d150015514dc2">ankitawaghmare@publicis.com</option>
                                <option value="6333dc26140fd00015eb9ace">basavaraj@example.com</option>
                                <option value="63354487f318a80015cbd34c">anshu@example.com</option>
                                <option value="633544c5f318a80015cbd34d">tejveer@example.com</option>
                                <option value="63350f09f318a80015cbd330">Praveenkumar4@example.com</option>
                                
                                
                            </select>
                            </div>
                            <button type="submit" class="addMemberButton">Add</button>
                        </form>
                        
                    
                    
                    </div>
                </div>
            `


                //teamContainer.innerHTML = teamListStr
            } );
        
        
        teamListStr += `
            <div class="boxContainer">
                <div id="plusSign">
                    
                    <!--<img src="../../../Image/plus-solid(1).svg" alt="Plus Sign">-->
                    <button id="plusButton" style=" border: none;background-color:white">&#43</button>

                </div>
                
                <div class="addTeamForm" id="addFormId">
                    
                    <form action=""  id="addTm">

                        <label for="teamName" >Enter Team Name</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="Team name"
                            
                        />
                        <label for="teamShortName"> Enter Team Short Name</label>
                        <input
                            type="text"
                            id="teamShortName"
                            name="teamShortName"
                            placeholder="Team short name"
                        />
                        <label for="teamDescription"> Enter Team Description</label>
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
                                
                                <select class="addMember" name="addMember" id="addMemAddForm" aria-label="Add member to a new team">
                                    
                                    <option value="">Select member</option>
                                    <option value="sumedh@example.com">sumedh@example.com</option>
                                    <option value="ankitawaghmare@publicis.com">ankitawaghmare@publicis.com</option>
                                    <option value="basavaraj@example.com">basavaraj@example.com</option>
                                    <option value="anshu@example.com">anshu@example.com</option>
                                    <option value="tejveer@example.com">tejveer@example.com</option>
                                    <option value="Praveenkumar4@example.com">Praveenkumar4@example.com</option>


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
        const form = document.getElementById( "addFormId" ) as HTMLElement;
        form.classList.add( "hide" );
        const plusSign = document.querySelector( "#plusSign" ) as HTMLElement;
        plusSign.addEventListener( "click",function(){
            const sign = document.getElementById( "plusSign" ) as HTMLElement;
            sign.classList.add( "hide" )
            form.classList.remove( "hide" )


        } )

        //getAllUsers();
        this.deleteMeeting();
        this.addingTeam();
        this.addingMember();
        

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
    addingTeam=()=>{
        const addTeamForm=document.querySelector( '#addTeamButton' ) as HTMLButtonElement
        const member = document.querySelector( ".addMember" ) as HTMLSelectElement
        const addFormTm= document.querySelector( "#addTm" )
        console.log( addFormTm )
        
        addTeamForm.addEventListener( "click",(  )=>{
            //event.preventDefault();
            const memberSelected = member.value;
            
            
            console.log( memberSelected )
            const teamContent = {
                name:( document.querySelector( "#teamName" ) as HTMLInputElement ).value.trim(),
                shortName:( document.querySelector( "#teamShortName" ) as HTMLInputElement ).value.trim(),
                description:( document.querySelector( "#teamDescription" ) as HTMLTextAreaElement ).value.trim(),
                members : [memberSelected] 
            }
            
            console.log( teamContent )
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
            addATeam( teamContent )
                .then(
                    function( response ){
                        console.log( response )
                        alert( "Team Added" )  
                        //window.location.href = '/teams.html';  
                        history.pushState( '','','/teams.html' )
                        loadPage( location.pathname )                        
                    }
                )
        } )
    }

    


    addingMember=()=>{
        const addMemberForms= document.querySelectorAll( ".addMemberForm" )

        addMemberForms.forEach( function( addMemberForm ){
            const  member= addMemberForm.querySelector( ".addMembers" ) as HTMLSelectElement
            addMemberForm.addEventListener( 'submit',function( event ){
                event.preventDefault();
                const userID=member.value;
                console.log( userID )
                
                const teamD = addMemberForm.closest( ".boxContainer" ) as HTMLElement
                const teamID = teamD.getAttribute( "teamID" );
                console.log( teamID )
                addMemberToTeam( teamID as string,userID )
                    .then(
                        function( response ){
                            alert( "member added" )
                            //window.location.href = '/teams.html';
                            history.pushState( '','','/teams.html' )
                            loadPage( location.pathname ) 
                            console.log( response );
                        }
                    )
            } )

        } )

    }

    deleteMeeting=()=>{
        const buttons = document.querySelectorAll( ".excuseBtn" )
        buttons.forEach( function( button ){
            button.addEventListener( "click",( event )=>{
                event.preventDefault();
                const deleteMeet = button.closest( ".boxContainer" ) as HTMLElement;//Returns the first (starting at element(button)) inclusive ancestor that matches selectors(here selector is .meetSep class , that ancestor have .meetSep class)
                console.log( deleteMeet )
                const teamID = deleteMeet.getAttribute( "teamID" )//getAttribute help to get the vaule from dom having attribute teamID (teamID="${team._id}")
                console.log( teamID );
                
                excuseFromATeam( teamID as string )
                    .then(
                        function( response ){
                            console.log( response );
                            alert( "Excuse from a Team" )
                            deleteMeet.remove();//remove will remove that(deleteMeet) node
                        
                        }
                    )
                
                    .catch( function( error ){
                        console.log( error.message )
                    } )
                

                
            } )
        } )
    }








    fetchingTeams=()=>{
        viewATeam()
            .then(
                function( response ){
                    //console.log(typeof(response)) it is an object
                    console.log( response )
                    return response;
                } )
            .then( this.showTeams )
    }


    //window.addEventListener("load",function(){
    load=()=>{ 
        this.fetchingTeams();
        initNav();
        
        
    }



}

export default Team



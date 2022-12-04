import Login from "./Pages/login"
import Register from "./Pages/registration"
import Calender from "./Pages/calender"
import SearchMeeting from "./Pages/filterMeeting"
import AddAMeeting from "./Pages/addAMeeting"
import Team from "./Pages/teams"

import {isAuthenticated} from './services/auth';

interface Construnctable<T>{
    new( ...args:any ):T
}

interface IRoutes {
    [key:string]:{
        template:string,
        Controller:Construnctable<any>|null,
        auth:boolean
    }
}
const routes:IRoutes ={
    "/login.html":{
        template:'loginT',
        Controller:Login,
        auth:false
    },
    "/register.html":{
        template:'registerT',
        Controller:Register,
        auth:false
    },
    "/calender.html":{
        template:'calenderT',
        Controller:Calender,
        auth:true
    },
    "/addmeetings.html":{
        template:'addMeetingsT',
        Controller:AddAMeeting,
        auth:true
    },
    "/searchmeetings.html":{
        template:'filterMeetingsT',
        Controller:SearchMeeting,
        auth:true
    },
    "/teams.html":{
        template:'teamsT',
        Controller:Team,
        auth:true
    },
    '*': {
        template: 'notFound',
        Controller: null,
        auth:false
    }
}

const setupLinks = ()=>{
    const links = document.querySelectorAll( 'a' ) 

    links.forEach( link=>{
        link.addEventListener( 'click',function( event ){
            event.preventDefault();//it will prevent from loading of page when click event is fired

            const nextPageUrl = link.getAttribute( 'href' );
            history.pushState( '','',nextPageUrl );//in url it will change the path to next url which was clicked
            loadPage( location.pathname );

        } )
    } )
}


const loadPage = ( pathname:string )=>{
    let route;
    if( pathname in routes ){
        route = routes[pathname];
    } else {
        route = routes['*']
    }
    if( route?.auth === true ){
        if( isAuthenticated()===false ){
            loadPage( '/login.html' )
            alert( "Please Login , unable to access" )
            return;
        }
    }
    if( route?.template ){
        const root = document.getElementById( 'root' ) as HTMLElement
        const tpl = ( document.getElementById( route.template ) as HTMLTemplateElement ).innerHTML
        root.innerHTML = tpl;
    }
    if( route?.Controller ){
        ( new route.Controller() ).load();
        setupLinks();
    }
}



export {
    loadPage
}
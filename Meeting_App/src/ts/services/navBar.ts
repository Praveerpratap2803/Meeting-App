import {getEmail} from "./auth"
import {loadPage} from "../loadPage"

const initNav = ()=>{
    const menu = ( document.querySelector( ".menu" ) as  HTMLImageElement )
    const navExtend = ( document.querySelector( ".navMob" ) as  HTMLElement )
    const logout = ( document.querySelector( "#logou" ) as  HTMLElement )
    const idd=( document.querySelector( '.id' ) as HTMLElement )
    idd.textContent = getEmail();
    menu.addEventListener( "click",function(){
        navExtend.classList.toggle( "navl" );

    } )
    logout.addEventListener( "click", function(){
        //event.preventDefault();
        
        alert( "Logging Out" )
        //window.location.href = "../../login.html";
        
        history.pushState( '','','/login.html' )//it will change only the url to /login.html not the content so location.pathname=/login.html
        localStorage.clear(); 
        loadPage( location.pathname )
    } );
    
    //window.addEventListener('load',function(){
    // load=()=>{
    //     idd=document.querySelector('.id')
    //     idd.textContent = getEmail();
    // }

}

export default initNav





import { getEmail } from "./auth";
var initNav = function () {
    var menu = document.querySelector(".menu");
    var navExtend = document.querySelector(".navMob");
    var logout = document.querySelector("#logou");
    var idd = document.querySelector('.id');
    idd.textContent = getEmail();
    menu.addEventListener("click", function () {
        navExtend.classList.toggle("navl");
    });
    logout.addEventListener("click", function () {
        //event.preventDefault();
        localStorage.clear();
        alert("Logging Out");
        window.location.href = "../../HTML_Pages/Login_Page.html";
    });
    //window.addEventListener('load',function(){
    // load=()=>{
    //     idd=document.querySelector('.id')
    //     idd.textContent = getEmail();
    // }
};
export default initNav;
//# sourceMappingURL=navBar.js.map
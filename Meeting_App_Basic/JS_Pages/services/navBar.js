
const menu = document.querySelector(".menu")
const navExtend = document.querySelector(".navMob")
const logout = document.querySelector("#logou")
menu.addEventListener("click",function(){
    navExtend.classList.toggle("navl");

})

logout.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    alert("Logging Out")
    window.location = "../../HTML_Pages/Login_Page.html";
  });
  









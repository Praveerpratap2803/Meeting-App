import { login } from "../services/auth";
var Login = /** @class */ (function () {
    function Login() {
        var _this = this;
        this.loginForm = null;
        this.addEventListeners = function () {
            _this.loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                // extract the email and password and form a credentials object
                var credentials = {
                    email: document.getElementById('emailID').value.trim(),
                    password: document.getElementById('password').value.trim(),
                };
                // if everything is valid
                login(credentials)
                    .then(function (loginResponse) {
                    console.log(loginResponse);
                    window.location.href = '../../HTML_Pages/Calender.html'; //next page you want to go
                })
                    .catch(function (error) {
                    alert(error.message);
                });
            });
        };
        //window.addEventListener( 'load', function() {
        this.load = function () {
            _this.loginForm = document.getElementById('formContent');
            _this.addEventListeners();
        };
    }
    return Login;
}());
export default Login;
//# sourceMappingURL=login.js.map
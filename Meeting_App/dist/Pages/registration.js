import register from "../services/resAuth";
var Register = /** @class */ (function () {
    function Register() {
        var _this = this;
        this.registerForm = null;
        this.addEventListeners = function () {
            _this.registerForm.addEventListener('submit', function (event) {
                event.preventDefault();
                // extract the email and password and form a credentials object
                var credentials = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('emailID').value.trim(),
                    password: document.getElementById('password').value.trim(),
                };
                // if everything is valid
                register(credentials)
                    .then(function (registerResponse) {
                    console.log(registerResponse);
                    window.location.href = '../../HTML_Pages/Calender.html'; //next page you want to go
                })
                    .catch(function (error) {
                    alert(error.message);
                });
            });
        };
        //window.addEventListener( 'load', function() {
        this.load = function () {
            _this.registerForm = document.getElementById('resFormContent');
            _this.addEventListeners();
        };
    }
    return Register;
}());
export default Register;
//# sourceMappingURL=registration.js.map
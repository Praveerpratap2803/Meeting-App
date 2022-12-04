import register from "../services/resAuth"
import "../../scss/pages/registrationPage.scss"
import {loadPage} from "../loadPage"

class Register{
    //registerForm:(HTMLFormElement|null)=null;
    registerForm = ( document.getElementById( 'resFormContent' ) as HTMLFormElement );
        
    nameElement = ( document.querySelector( "#name" ) as HTMLInputElement );
    emailElement = ( document.querySelector( "#emailID" ) as HTMLInputElement );
    passwordElement = ( document.querySelector( "#password" ) as HTMLInputElement );
    confirmPasswordElement = ( document.querySelector( "#confirmPassword" ) as HTMLInputElement );
    firstName:( string|null ) = null;
    formEl:( HTMLElement|null ) = null;
    messageElement:( HTMLElement|null )= null
    email:( string|RegExp|null )=null;
    emailValue:( string|null )=null;
    validName =()=>{
        
        const firstName = this.nameElement.value.trim();
        const formEl = this.nameElement.closest( ".formContent" ) as HTMLElement;
        const messageElement = formEl.querySelector( ".message" ) as HTMLElement;
        let error = "";
        if ( firstName.length === 0 ) {
            error += `<div> Name cannot be empty</div>`;
        }
        messageElement.innerHTML = error;

        return error === "";
        
    }

    validEmail = () => {
        this.emailValue = ( this.emailElement as HTMLInputElement ).value.trim();
        const formEl = ( this.emailElement as HTMLInputElement ).closest( ".formContent" ) as HTMLElement;
        const messageElement = formEl.querySelector( ".message" ) as HTMLElement;
        this.email = /[a-zA-Z0-9]+@(example\.com|gmail\.com)+$/;
        let error = "";
        if ( !this.email.test( this.emailValue as string ) ) {
            error += `<div>Please provide valid email</div>`;
        }
        ( messageElement as HTMLElement ).innerHTML = error
        return error === "";
    }

    validPassword=()=>{
        const passwordValue = this.passwordElement.value.trim();
        const formEl = this.passwordElement.closest( ".formContent" ) as HTMLLIElement;
        const messageElement = formEl.querySelector( ".message" ) as HTMLElement;

        let error = "";

        if ( passwordValue.length <= 8 ) {
        // empty string is considered as false
            error += `<div>Minimum password length should be 8</div>`;
        }

        // uppercase
        const uppercasePat = /[A-Z]/;
        if ( !uppercasePat.test( passwordValue ) ) {
            error += `<div>Uppercase character missing</div>`;
        }

        // lowercase
        const lowercasePat = /[a-z]/;
        if ( !lowercasePat.test( passwordValue ) ) {
            error += `<div>lowercase character missing</div>`;
        }
        const numberPat = /[0-9]/;
        if ( !numberPat.test( passwordValue ) ) {
            error += `<div>Number missing</div>`;
        }
        const specialCharPat = /[!@#$%^&*(),.?":{}|<>]/;
        if ( !specialCharPat.test( passwordValue ) ) {
            error += `<div>Special Character missing</div>`;
        }

        messageElement.innerHTML = error;

        return error === "";
    }

    validConfirmPassword() {
        const confirmPassword = this.confirmPasswordElement.value;
        const password = this.passwordElement.value;

        const formEl = this.confirmPasswordElement.closest( ".formContent" ) as HTMLElement;
        const messageElement = formEl.querySelector( ".message" ) as HTMLElement;

        let error = "";

        if ( password != confirmPassword ) {
            error += `<div>Password should match</div>`;
        }

        messageElement.innerHTML = error;

        return error === "";
    }

    validate() {
        let isValid = true;

        isValid = this.validName() && isValid;
        isValid = this.validPassword() && isValid;
        isValid = this.validConfirmPassword() && isValid;

        return isValid;
    }






    addEventListeners=()=>{

        this.nameElement.addEventListener( "blur", this.validName );
        this.nameElement.addEventListener( "input", this.validName );

        this.emailElement.addEventListener( "blur", this.validEmail );
        this.emailElement.addEventListener( "input", this.validEmail );

        this.passwordElement.addEventListener( "blur", this.validPassword );
        this.passwordElement.addEventListener( "input", this.validPassword );

        this.confirmPasswordElement.addEventListener( "blur", this.validConfirmPassword );
        this.confirmPasswordElement.addEventListener( "input", this.validConfirmPassword );



        ( this.registerForm as HTMLFormElement ).addEventListener( 'submit', ( event )=>{
            event.preventDefault();

            // extract the email and password and form a credentials object
            const credentials = {
                name: ( document.getElementById( 'name' ) as HTMLInputElement ).value,
                email: ( document.getElementById( 'emailID' ) as HTMLInputElement ).value.trim(),
                password: ( document.getElementById( 'password' ) as HTMLInputElement ).value.trim()
            };

            // if everything is valid
            if( this.validate() ){
                register( credentials )
                    .then(
                        function( registerResponse ) {
                            console.log( registerResponse );
                            //window.location.href = '/login.html';//next page you want to go
                            history.pushState( '','','/login.html' )
                            loadPage( location.pathname )
                        }
                    )
                
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    );
            }
            else{
                alert( 'Enter valid data' )
            }
        } );
    }

    //window.addEventListener( 'load', function() {
    load=()=>{
        //this.registerForm = (document.getElementById( 'resFormContent' ) as HTMLFormElement);
        
        this.addEventListeners();
    };
}

export default Register







(function() {
    let registerForm;

    function addEventListeners() {
        registerForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();

            // please do validations
            // ...

            // extract the email and password and form a credentials object
            const credentials = {
                name: document.getElementById( 'name' ).value,
                email: document.getElementById( 'emailID' ).value.trim(),
                password: document.getElementById( 'password' ).value.trim(),
            };

            // if everything is valid
            register( credentials )
                .then(
                    function( registerResponse ) {
                        console.log( registerResponse );
                        window.location.href = '../../HTML_Pages/Calender.html';//next page you want to go
                    }
                )
                
                .catch(
                    function( error ) {
                        alert( error.message );
                    }
                );
        });
    }

    window.addEventListener( 'load', function() {
        registerForm = document.getElementById( 'resFormContent' );
        
        addEventListeners();
    });
})();
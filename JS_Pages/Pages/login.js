
(function() {
    let loginForm;

    function addEventListeners() {
        loginForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();

            

            // extract the email and password and form a credentials object
            const credentials = {
                email: document.getElementById( 'emailID' ).value.trim(),
                password: document.getElementById( 'password' ).value.trim(),
            };

            // if everything is valid
            login( credentials )
                .then(
                    function( loginResponse ) {
                        console.log( loginResponse );
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
        loginForm = document.getElementById( 'formContent' );
        
        addEventListeners();
    });
})();



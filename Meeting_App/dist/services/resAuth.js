function register(credentials) {
    return fetch("https://mymeetingsapp.herokuapp.com/api/auth/register", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            // Authorization: "sdkbkjwbejwbveiwbviwb"
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
        if (!response.ok) {
            // for 404 kind of errors, we should check and explcitly throw an error
            throw new Error(response.statusText);
        }
        return "Success";
    });
    /*
    .then(
        function( registerResponse ) {
            // store the details in localStorage
            localStorage.setItem( 'email', loginResponse.email );
            localStorage.setItem( 'token', loginResponse.Token );
            localStorage.setItem( 'role', loginResponse.role );

            return registerResponse;
        }
    )
    */
}
/*
function getToken() {
    return localStorage.getItem( 'token' );
}
function getEmail() {
    return localStorage.getItem( 'email' );
}
function getRole() {
    return localStorage.getItem( 'role' );
}
*/
export default register;
//# sourceMappingURL=resAuth.js.map
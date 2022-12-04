import 'whatwg-fetch';
import { login } from "./auth";

test( 'check Login',( done )=>{
    login( {
        "email": "praveer@example.com",
        "password": "Praveer@1234"
    } )
        .then( ( response )=>{
            expect( response ).toEqual( {
                "message": "Signed in sucessfully",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXZlZXJAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI2MmYwY2FhNmFkNzE1MDAwMTVjOGJlMzMiLCJpYXQiOjE2NjMxOTU5MjgsImV4cCI6MTY2MzI4MjMyOH0.llcBwzTs4n0erBSUooIOEL9eZ5ZHb1MhqZW57-sOfzw",
                "email": "praveer@example.com",
                "name": "Praveer Pratap"
            } );
            done();
        } )

} )









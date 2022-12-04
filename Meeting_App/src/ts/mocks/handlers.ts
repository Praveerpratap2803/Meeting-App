
import {rest} from 'msw';
import meetings from './meeting-data';
const handler=[

    rest.get( `https://mymeetingsapp.herokuapp.com/api/calendar`,( req ,res ,ctx )=>{
        return res(
            ctx.json( meetings )
        )
    } ),


    
    rest.post( 'https://mymeetingsapp.herokuapp.com/api/auth/login',( res,req,ctx ) => {

        return req(
            ctx.status( 200 ),
            ctx.json( {
                "message": "Signed in sucessfully",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXZlZXJAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI2MmYwY2FhNmFkNzE1MDAwMTVjOGJlMzMiLCJpYXQiOjE2NjMxOTU5MjgsImV4cCI6MTY2MzI4MjMyOH0.llcBwzTs4n0erBSUooIOEL9eZ5ZHb1MhqZW57-sOfzw",
                "email": "praveer@example.com",
                "name": "Praveer Pratap"
            } )
        );
    } )
]

export default handler;



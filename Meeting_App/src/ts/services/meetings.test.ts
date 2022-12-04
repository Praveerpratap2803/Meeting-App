import 'whatwg-fetch';
import { viewCalender } from "./meetings"; 

test( 'View Meetings',( done )=>{
    viewCalender( `2022-09-25` )
        .then( ( calMeetings )=>{
            expect( calMeetings instanceof Array ).toBe( true )
            done();
        } )
} )







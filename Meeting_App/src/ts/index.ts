import {loadPage} from './loadPage'

window.addEventListener( 'popstate', function() {//popstate event fire when we click the back and forward tab.
    // load the new page based on the new url 
    loadPage( location.pathname );
} );

loadPage( location.pathname )








import Register from "./registration"

const registerPage = new Register();


describe( 'Validation',()=>{
    test( 'Valid Name',()=>{
        document.body.innerHTML = `<div class="formContent">
        <label for="name" class="form name">Name</label>
        <input 
            type="text"  
            id="name"
            name="name"
        />
        <p class="message error"></p>
        </div>`;
        registerPage.nameElement = document.querySelector( '#name' ) as HTMLInputElement
        registerPage.formEl = registerPage.nameElement.closest( '.formContent' ) as HTMLElement
        registerPage.messageElement = registerPage.formEl.querySelector( ".message" ) as HTMLElement
        registerPage.firstName='Praveer';
        const result = registerPage.firstName.trim().length;
        registerPage.validName();
        expect( result ).not.toEqual( 0 );

    } )

    test( 'Valid Email',()=>{
        document.body.innerHTML=`<div class="formContent">
        <label for="emailID" class="form email">Email ID</label>
        <input 
            type="email"  
            id="emailID"
            name="emailID"
        />
        <p class="message error"></p>
        </div>`

        registerPage.emailElement=document.querySelector( '#emailID' ) as HTMLInputElement
        registerPage.formEl=registerPage.emailElement.closest( '.formContent' ) as HTMLElement
        registerPage.messageElement=registerPage.formEl.querySelector( '.message' ) as HTMLElement
        // registerPage.email="praveer@example.com";
        
        const result1 = "praveer@example.com"
        const result2 = "praveerexample.com"

        registerPage.validEmail();
        const result = registerPage.email;
        expect( result1 ).toMatch( result as RegExp )
        expect( result2 ).not.toMatch( result as RegExp )

    } )




} )


























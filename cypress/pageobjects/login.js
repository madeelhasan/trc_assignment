class LoginPage{
    get logo()
    {return cy.get('img');}

    get dropdown()
    {return cy.get('#dropdownMenuButton');}

    get englishHeaderText()
    {return cy.get('h1');}

    get englishSubText()
    {return cy.get('.login-form-header > p');}

    get signupLink()
    {return cy.get('.login-form-header > p > a');}

    get usernameField()
    {return cy.get('#username');}

    get passwordField()
    {return cy.get('#password');}

    get remembermeCheckBox(){
        return cy.get('#remember-me-checkbox');
    }

    get remembermeText(){
        return cy.get('.list > :nth-child(3) > label');
    }

    get forgotPasswordLink(){
        return cy.get('.js-toggle-form');
    }

    get submitButton(){
        return cy.get('#submit-btn');
    }
}

export default LoginPage;
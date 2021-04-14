/// <reference types="cypress" />

import LoginPage from "../pageobjects/login.js";
import Dashboard from "../pageobjects/dashboard.js"

const LoginPageObject = new LoginPage();
const DashboardObject = new Dashboard();


it('Navigate to the signin page',() => {
    cy.visit('http://app.mailerlite.com');
    cy.get('.ot-sdk-container > .ot-sdk-row')
    .then(e=>{cy.get('#onetrust-accept-btn-handler').click();
             })
    
})

it('Verify that logo exists',() => {
    LoginPageObject.logo
    .should('be.visible');

})

it('Verify that English is the default language',() => {
    cy.fixture('strings.json').then(function(data)
    {
    LoginPageObject.dropdown
    .should('contain', data.defaultlanguage)
    })
})

it('Verify Body Text',() => {
    cy.fixture('strings.json').then(function(data)
    {
    LoginPageObject.englishHeaderText.invoke('text')
        .should('contain',data.englishheadertext);
    LoginPageObject.englishSubText.invoke('text')
        .should('contain',data.englishsubtext).and('contain',data.englishsubtext2)
    })
})

it('Verify presence of signup link', () => {
    
        LoginPageObject.signupLink
        .should('have.attr','href')
        .and('eq','https://www.mailerlite.com/signup/')
})

it('Verify username text box is available',() => {
    LoginPageObject.usernameField
    .should('be.visible')
})

it('Verify that password text box is available',() => {
    
    LoginPageObject.passwordField
    .should('be.visible')
})

it('Verify that remember me check box is available',() => {
    LoginPageObject.remembermeCheckBox
    .should('be.visible')
})

it('Verify that remember me text is available',() => {
    cy.fixture('strings.json').then(function (mystring)
    {
    LoginPageObject.remembermeText
    .should ('contain',mystring.englishremembermetext).and('be.visible') 
    cy.log(mystring.englishremembermetext)
    })
})

it('Verify that submit button is available',() => {
    LoginPageObject.submitButton
    .should('be.visible')
})

it('Verify that forgot password link is available',() => {
    LoginPageObject.forgotPasswordLink
    .should('be.visible').and('have.attr','href').and('eq','/users/remind/')
})

it('Verify that user can successfully login',() => {
    cy.fixture('strings.json').then(function (mystring)
    {
    LoginPageObject.usernameField
    .clear().type(mystring.username)
    LoginPageObject.passwordField
    .clear().type(mystring.password)
    cy.wait(4000)//not recommended
    LoginPageObject.submitButton
    .click()
    DashboardObject.loggedinuser.invoke('text').should('contain','Adeel')
    DashboardObject.heading.invoke('text').should('contain','Welcome')
    
    })
})
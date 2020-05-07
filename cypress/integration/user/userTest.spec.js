/// <reference types="cypress" />

describe('User registration',() =>{

    beforeEach('User webpage',() =>{
        cy.visit('https://demo.nopcommerce.com')
    })

    it('User Registration',()=>{
        //cy.visit('https://demo.nopcommerce.com')
        cy.contains('Register').should('be.visible').click();
        cy.get('#gender-male').should('be.visible').should('not.be.checked').click();
        cy.get('#FirstName').type('myfname');
        cy.get('#LastName').type('mylname');
        //cy.get('.date-picker-wrapper > .valid').select('2');
        //cy.contains('month').select('May');
       // cy.contains('Year').select('1984');
        cy.get('#Email').should('be.visible').type('myemail1@gmail.com');
        cy.get('#Password').should('be.visible').type('mypassword');
        cy.get('#ConfirmPassword').should('be.visible').type('mypassword');
        cy.get('#register-button').click();
        cy.get('.result').should('be', 'Your registration completed');
        });

        

        it('User login',()=>{
            cy.get('.ico-login').should('be.visible').click();
            cy.get('#Email').should('be.visible').type('myemail@gmail.com');
            cy.get('#Password').should('be.visible').type('mypassword');
            cy.get('form > .buttons > .button-1').click();
            cy.get('.ico-logout').should('be.visible');
        });

        it('Change Currency',() =>{
            cy.get('#customerCurrency').should('be.visible').select('Euro').should('be', 'Euro');
            //cy.get('#customerCurrency').should('be', 'Euro');
            //cy.get('#gift aid').should('be.visible').should('be', '€25 Virtual gift card');
        });

        it('Predicted text search', () =>{
            cy.get('#small-searchterms').type('mac');
            //select('Apple MacBook Pro 13-inch');
            //cy.contains('mac').select('Apple MacBook Pro 13-inch');
            cy.contains('Apple MacBook Pro 13-inch').should('be', 'Apple MacBook Pro 13-inch');
        })
            



})
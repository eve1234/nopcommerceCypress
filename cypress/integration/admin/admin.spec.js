describe('admin stuff',() =>{

    it('Admin login',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/');
        cy.get('.button-1').should('be.visible').click();
        //cy.contains('email').should('be.visible').type('admin@yourstore.com');
        //cy.contains('password').should('be.visible').type('admin');
        //cy.contains('log in').click();
        //cy.contains('logout').should('be.visible');
        });

        it(`Check brenda's order status` , () =>{
            cy.contains('Brenda Lindgren').should('be', 'Brenda Lindgren')
            cy.contains('processing').should('be','processing');
        })


})
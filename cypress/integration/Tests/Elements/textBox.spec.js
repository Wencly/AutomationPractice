describe('Name of the group', () => {
    it('should ', () => {
        cy.visit('/text-box');
        //Full Name
        cy.wait(5000)
        cy.get('input[id="userName"]').should('be.visible').type('My name is');
        //Email
        /* cy.get('#userEmail').type('wendychuquimia@gmail.com')
        //Current Address
        cy.get('#currentAddress').type('Calle Siempre viva Nro 123')
        //Permanent Address
        cy.get('#permanentAddress').type('Calle Siempre viva Nro 123')
        //submit
        cy.get('#submit') */
    });
});
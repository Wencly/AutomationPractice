describe('Name of the group', () => {
    it('should ', () => {
        cy.visit('/text-box');
        cy.get('input[id="userName"]').should('be.visible').type('My name is');
    });
});
declare namespace Cypress {
    interface Chainable<Subject> {
        checkIfLinkReturnsStatus(link: string, status: number): Chainable<void>;
    }
}

Cypress.Commands.add('checkIfLinkReturnsStatus', (link: string, status: number) => {
    cy.get(link).then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', status);
    });
});

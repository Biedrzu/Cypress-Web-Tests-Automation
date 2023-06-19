export const checkBookUrlAndReturn = (bookId: string) => {
    cy.url().should('include', bookId);
    cy.contains('Back To Book Store').click();
    cy.url().should('equal', Cypress.config().baseUrl + '/')
}

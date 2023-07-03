import './commands';

Cypress.on('uncaught:exception', () => {
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

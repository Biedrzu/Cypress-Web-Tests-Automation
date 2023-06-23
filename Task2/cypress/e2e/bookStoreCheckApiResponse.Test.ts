import { checkApiResponseTest } from "@support/helpers/homePageAPI.Helper";

context('API response test', () => {
    before(() => {
        cy.intercept('GET', ' https://demoqa.com/BookStore/v1/Books').as('getBooks');
        cy.visit('/');
    });

    it('Check API response with books', () => {
        const alias: string = '@getBooks'
        checkApiResponseTest(alias);
    });
});

import { homePageSelectors } from "@support/selectors/homePage.Selectors";
import { getRandomBook } from "@support/helpers/homePage.Helper";
import { bookStoreLeftPanelTest } from "@support/helpers/leftPanel.Helper";

context('Book Store Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Check Url', () => {
        cy.url().should('include', Cypress.config().baseUrl);
    });

    it('Check left pannel', () => {
        bookStoreLeftPanelTest();
    });

    it('Check that each book link from the table returns 200 status code', () => {
        cy.get(homePageSelectors.reactTable).find(homePageSelectors.aTag).each((bookLink: string) => {
            cy.checkIfLinkReturnsStatus(bookLink, 200);
        });
    });

    it('Check that random book is opened correctly and back to home page', () => {
        getRandomBook().then(randomIndex => {
            cy.get(homePageSelectors.reactTable).find(homePageSelectors.aTag).eq(randomIndex).then((bookLink) => {
                cy.wrap(bookLink).invoke('attr', 'href').then(href => {
                    const bookId = href.slice(12);
                    cy.wrap(bookLink).click();
                    cy.url().should('include', bookId);
                    cy.contains('Back To Book Store').click();
                    cy.url().should('equal', Cypress.config().baseUrl + '/')
                });
            });
        });
    });
});

import { homePageSelectors } from "@support/selectors/homePage.Selectors";
import { openRandomBookAndGetBackToStore, rowManipulationTest, pageNumberManipulation, searchTest } from "@support/helpers/homePage.Helper";
import { bookStoreLeftPanelTest } from "@support/helpers/leftPanel.Helper";

context('Book store functionality tests', () => {
    beforeEach(() => {

        // this would be a better solution then skipping all uncaught: exception in e2e.js file
        // but cannot put it there; must be within context or it
        
        // https://filiphric.com/how-to-wait-for-page-to-load-in-cypress
        // cy.intercept('**/adplus.js', {
        //     body: undefined
        // })

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

    it('Search test', () => {
        const seachQuery: string = 'JavaScript';
        searchTest(seachQuery);
    });

    it('Check that random book is opened correctly and back to home page', () => {
        openRandomBookAndGetBackToStore();
    });

    it('Check row manipulation', () => {
        rowManipulationTest();
    });

    it('Check page manipulation', () => {
        pageNumberManipulation();
    });
});

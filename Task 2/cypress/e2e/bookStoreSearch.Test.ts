import { searchTest } from "@support/helpers/homePage.Helper";

context('Book store search', () => {
    const seachQuery: string = 'JavaScript';

    beforeEach(() => {
        cy.visit('/');
    });

    it('Search test', () => {
        searchTest(seachQuery);
    });
});

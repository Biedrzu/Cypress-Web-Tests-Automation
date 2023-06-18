import { homePageSelectors } from "../support/selectors/homePage.Selectors";
import * as leftPanelHelper from "../support/helpers/leftPanel.Helper";
import * as homePageHelper from "../support/helpers/homePage.Helper";

context('Book Store Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Check Url', () => {
        cy.url().should('include', Cypress.config().baseUrl);
    });

    it('Check left pannel', () => {
        leftPanelHelper.checkBookStoreIsExpanded();
        leftPanelHelper.clickOnBookStore();
        leftPanelHelper.checkBookStoreIsCollapsed();
        leftPanelHelper.clickOnBookStore();
        leftPanelHelper.checkBookStoreIsExpanded();
    });

    it('Check that each book link from the table returns 200 status code', () => {
        cy.get(homePageSelectors.reactTable).find(homePageSelectors.aTag).each((bookLink: string) => {
            cy.checkIfLinkReturnsStatus(bookLink, 200);
        });
    });

    it('Check sorting by titles ascending', () => {
        homePageHelper.checkOrderingByTitles('.-sort-asc');
    });

    it.only('Check sorting by titles descending', () => {
        homePageHelper.checkOrderingByTitles('-sort-desc');
    });

    it('Check sorting by authors', () => {
        homePageHelper.getValueOfTableColumns(2).then(initialAuthors => {
            let sortedAuthors = initialAuthors.sort().toString();
            homePageHelper.orderTableByColumn(2, '-sort-asc');
            homePageHelper.getValueOfTableColumns(2).then(actualAuthors => {
                expect(sortedAuthors).to.equal(actualAuthors.toString());
            });
        });
    });

    it('Check sorting by publisher', () => {
        homePageHelper.getValueOfTableColumns(3).then(initialPublishers => {
            let sortedPublishers = initialPublishers.sort().toString();
            console.log(sortedPublishers);
            homePageHelper.orderTableByColumn(3, '-sort-asc');
            homePageHelper.getValueOfTableColumns(3).then(actualPublishers => {
                console.log(actualPublishers);
                expect(sortedPublishers).to.equal(actualPublishers.toString());
            });
        });
    });
});

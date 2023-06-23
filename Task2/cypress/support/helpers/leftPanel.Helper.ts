import { leftPanelSelectors } from "../selectors/leftPanel.Selectors";

const bookStoreSectionName: string = 'Book Store Application';

const checkBookStoreIsExpanded = () => {
    cy.get(`${leftPanelSelectors.accordion} ${leftPanelSelectors.elementGroup}`).eq(5).then(bookStoreGroup => {
        cy.wrap(bookStoreGroup).find(leftPanelSelectors.headerRight).find('path').eq(1).invoke('attr', 'd').then(dValue => {
            expect(dValue).to.contain('5.83z');
        });
        cy.wrap(bookStoreGroup).find(leftPanelSelectors.elementList).should('have.class', 'show');
    });
}

const clickOnBookStore = () => {
    cy.contains(bookStoreSectionName).click();
}

const checkBookStoreIsCollapsed = () => {
    cy.get(`${leftPanelSelectors.accordion} ${leftPanelSelectors.elementGroup}`).eq(5).then(bookStoreGroup => {
        cy.wrap(bookStoreGroup).find(leftPanelSelectors.headerRight).find('path').eq(1).invoke('attr', 'd').then(dValue => {
            expect(dValue).to.contain('13.17V2h2v11.172z');
        });
        cy.wrap(bookStoreGroup).find(leftPanelSelectors.elementList).should('not.have.class', 'show');
    });
}

export const bookStoreLeftPanelTest = () => {
    checkBookStoreIsExpanded();
    clickOnBookStore();
    checkBookStoreIsCollapsed();
    clickOnBookStore();
    checkBookStoreIsExpanded();
}

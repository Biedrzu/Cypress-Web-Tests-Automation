import * as homePageHelper from "@support/helpers/homePage.Helper";

context('Book store table sorting', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Check sorting by titles ascending', () => {
        homePageHelper.checkSortingByTitlesAsc();
    });
    
    it('Check sorting by titles descending', () => {
        homePageHelper.checkSortingByTitlesDesc();
    });
    
    it('Check sorting by authors ascending', () => {
        homePageHelper.checkSortingByColumnAsc(2);
    });
    
    it('Check sorting by authors descending', () => {
        homePageHelper.checkSortingByColumnDesc(2);
    });
    
    it('Check sorting by publisher ascending', () => {
        homePageHelper.checkSortingByColumnAsc(3);
    });
    
    it('Check sorting by publisher descending', () => {
        homePageHelper.checkSortingByColumnDesc(3);
    }); 
});

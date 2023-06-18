import { homePageSelectors } from "../support/selectors/homePage.Selectors";

context('Home Page API Mocking Test', () => {
    const testBook: string = 'Test Book';
    const testAuthor: string = 'Test Author';
    const testPublisher: string = 'Test Publisher';

    before(() => {
        cy.intercept('GET', ' https://demoqa.com/BookStore/v1/Books', (req) => {
            req.reply((res) => {
                console.log(res.body['books'][0])
                res.body['books'][0]['author'] = testAuthor
                res.body['books'][0]['title'] = testBook
                res.body['books'][0]['publisher'] = testPublisher
            });
        });
        cy.visit('/');
    });

    it('Check if mocked data is displayed correctly', () => {
        cy.get(homePageSelectors.tBody).find(homePageSelectors.tGroup).eq(0).then(firstGroup => {
            cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(1).invoke('text').then(title => {
                expect(title).to.contain(testBook)
            })
            cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(2).invoke('text').then(author => {
                expect(author).to.contain(testAuthor)
            })
            cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(3).invoke('text').then(publisher => {
                expect(publisher).to.contain(testPublisher)
            });
        });
    });
});

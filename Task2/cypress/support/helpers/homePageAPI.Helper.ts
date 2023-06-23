import { homePageSelectors } from "@support/selectors/homePage.Selectors";

export const checkApiResponseTest = (alias: string) => {
    cy.wait(alias).then(xhr => {
        expect(xhr.response.statusCode).to.equal(200);
        cy.get(xhr.response.body.books).then(books => {
            cy.wrap(books).each(element => {
                expect(element['description']).to.exist;
                expect(element['isbn']).to.have.length(13);
                expect(typeof (element['author'])).to.contain('string');
                expect(typeof (element['pages'])).to.contain('number');
            });
        });
    });
}

export const apiResponseMock = (testTitle: string, testAuthor: string, testPublisher: string) => {
    cy.intercept('GET', ' https://demoqa.com/BookStore/v1/Books', (req) => {
        req.reply((res) => {
            res.body['books'][0]['title'] = testTitle;
            res.body['books'][0]['author'] = testAuthor;
            res.body['books'][0]['publisher'] = testPublisher;
        });
    });
}

export const mockResponseTest = (testTitle: string, testAuthor: string, testPublisher: string) => {
    cy.get(homePageSelectors.tBody).find(homePageSelectors.tGroup).eq(0).then(firstGroup => {
        cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(1).invoke('text').then(title => {
            expect(title).to.contain(testTitle);
        });
        cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(2).invoke('text').then(author => {
            expect(author).to.contain(testAuthor);
        });
        cy.wrap(firstGroup).find(homePageSelectors.tCell).eq(3).invoke('text').then(publisher => {
            expect(publisher).to.contain(testPublisher);
        });
    });
}

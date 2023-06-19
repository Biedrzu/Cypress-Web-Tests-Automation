import { apiResponseMock, mockResponseTest } from "@support/helpers/homePageAPI.Helper";

context('Mocked API response test', () => {
    const testTitle: string = 'Test Title';
    const testAuthor: string = 'Test Author';
    const testPublisher: string = 'Test Publisher';

    before(() => {
        apiResponseMock(testTitle, testAuthor, testPublisher);
        cy.visit('/');
    });

    it('Check if mocked data is displayed correctly', () => {
        mockResponseTest(testTitle, testAuthor, testPublisher);
    });
});

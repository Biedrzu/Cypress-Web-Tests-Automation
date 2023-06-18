context('Home Page API Test', () => {
    before(() => {
        cy.intercept('GET', ' https://demoqa.com/BookStore/v1/Books').as('getBooks');
        cy.visit('/');
    });

    it('Check API response with books', () => {
        cy.wait('@getBooks').then(xhr => {
            expect(xhr.response.statusCode).to.equal(200);
            cy.get(xhr.response.body.books).then(books => {
                cy.wrap(books).each(element => {
                    console.log(element)
                    expect(element['description']).to.exist;
                    expect(element['isbn']).to.have.length(13);
                    expect(typeof(element['author'])).to.contain('string');
                    expect(typeof(element['pages'])).to.contain('number');
                });
            });
        });
    });
});

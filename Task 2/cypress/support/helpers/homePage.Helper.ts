import { homePageSelectors } from "@support/selectors/homePage.Selectors";

const sortTableByColumnAsc = (index: number) => {
    cy.get(homePageSelectors.tColumnHeader).eq(index).click()
    cy.get(homePageSelectors.tColumnHeader).eq(index).invoke('attr', 'class').then(tableHeader => {
        cy.wrap(tableHeader).should('contain', '-sort-asc');
    });
}

const sortTableByColumnDesc = (index: number) => {
    cy.get(homePageSelectors.tColumnHeader).eq(index).click();
    cy.get(homePageSelectors.tColumnHeader).eq(index).click();
    cy.get(homePageSelectors.tColumnHeader).eq(index).invoke('attr', 'class').then(tableHeader => {
        cy.wrap(tableHeader).should('contain', '-sort-desc');
    });
}

const getTitles = () => {
    let titles: string[] = [];

    return cy.get(homePageSelectors.tBody).find(homePageSelectors.aTag).each(a => {
        cy.wrap(a).invoke('text').then(text => {
            titles.push(text);
        })
    }).then(() => {
        return titles;
    });
}

export const checkSortingByTitlesAsc = () => {
    getTitles().then(initialTitles => {
        let sortedTitles = initialTitles.sort().toString();
        sortTableByColumnAsc(1);
        getTitles().then(actualTitles => {
            expect(sortedTitles).to.equal(actualTitles.toString());
        });
    });
}

export const checkSortingByTitlesDesc = () => {
    getTitles().then(initialTitles => {
        let sortedTitles = initialTitles.sort().reverse().toString();
        sortTableByColumnDesc(1);
        getTitles().then(actualTitles => {
            expect(sortedTitles).to.equal(actualTitles.toString());
        });
    });
}

const getValueOfTableColumns = (index: number) => {
    let values: string[] = [];

    return cy.get(`${homePageSelectors.tBody} ${homePageSelectors.tRow}`).not('.-padRow').each(tRow => {
        cy.wrap(tRow).find(homePageSelectors.tCell).eq(index).invoke('text').then(text => {
            values.push(text);
        });
    }).then(() => {
        return values;
    });
}

export const checkSortingByColumnAsc = (index: number) => {
    getValueOfTableColumns(index).then(initialValues => {
        let sortedValues = initialValues.sort().toString();
        sortTableByColumnAsc(index);
        getValueOfTableColumns(index).then(actualValues => {
            expect(sortedValues).to.equal(actualValues.toString());
        });
    });
}

export const checkSortingByColumnDesc = (index: number) => {
    getValueOfTableColumns(index).then(initialValues => {
        let sortedValues = initialValues.sort().reverse().toString();
        sortTableByColumnDesc(index);
        getValueOfTableColumns(index).then(actualValues => {
            expect(sortedValues).to.equal(actualValues.toString());
        });
    });
}

export const searchTest = (searchQuery: string) => {
    cy.get(homePageSelectors.searchBox).type(searchQuery);
    cy.get(homePageSelectors.tBody).find(homePageSelectors.tRow).not('.-padRow').then(booksFound => {
        cy.wrap(booksFound).each(book => {
            let textFileds: string = ''
            cy.wrap(book).find(homePageSelectors.aTag).invoke('text').then(text => {
                textFileds += text
                cy.wrap(book).find(homePageSelectors.tCell).invoke('text').then(cellText => {
                    textFileds += cellText
                    expect(textFileds).to.contain(searchQuery);
                });
            });
        });
    });
}

export const getRandomBook = () => {
    return cy.get(homePageSelectors.tBody).find(homePageSelectors.tRow).not('.-padRow').then((booksFound) => {
        let numOfBooks: number = booksFound.length
        let randomIndex: number = Math.floor(Math.random() * numOfBooks)
        return randomIndex
    });
}

export const openBook = (randomIndex: number) => {
    return cy.get(homePageSelectors.reactTable).find(homePageSelectors.aTag).eq(randomIndex).then((bookLink) => {
        cy.wrap(bookLink).invoke('attr', 'href').then(href => {
            cy.wrap(bookLink).click();
            const bookId: string = href.slice(12);


            return bookId
        })
    })
}

export const openRandomBookAndGetBackToStore = () => {
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
}

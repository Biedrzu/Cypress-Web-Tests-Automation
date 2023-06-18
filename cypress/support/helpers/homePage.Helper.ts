import { homePageSelectors } from "../selectors/homePage.Selectors";

export const orderTableByColumn = (index: number, order: string) => {
    cy.get(homePageSelectors.tColumnHeader).eq(index).invoke('attr', 'class').then(tableHeader => {
        console.log(tableHeader)
        let i = 0
        // while(tableHeader.includes(order)) {
        //     cy.get(homePageSelectors.tColumnHeader).eq(index).click()
        // }

        while (true) {
            let i = 0
            if (tableHeader.includes(order)) {
                cy.log('success!')
                break

            }
            
            else if (i <= 3) {
                cy.get(homePageSelectors.tColumnHeader).eq(index).click()
                i++
                console.log('dupa')
            }
        }

        // if (tableHeader.includes(order)) {
        //     return
        // }
        // else {
        //     cy.get(homePageSelectors.tColumnHeader).eq(index).click()
        // }

        // if (tableHeader.includes(order)) {
        //     return
        // }
        // else {
        //     cy.get(homePageSelectors.tColumnHeader).eq(index).click()
        // }
    })
}

export const getTitles = () => {
    let titles: string[] = [];

    return cy.get(homePageSelectors.tBody).find(homePageSelectors.aTag).each(a => {
        cy.wrap(a).invoke('text').then(text => {
            titles.push(text);
        })
    }).then(() => {
        return titles;
    });
}

export const checkOrderingByTitles = (order: string) => {
    getTitles().then(initialTitles => {
        let sortedTitles = initialTitles.sort().toString();
        orderTableByColumn(1, order);
        getTitles().then(actualTitles => {
            expect(sortedTitles).to.equal(actualTitles.toString());
        });
    });
}

export const getValueOfTableColumns = (index: number) => {
    let authors: string[] = [];

    return cy.get(`${homePageSelectors.tBody} ${homePageSelectors.tRow}`).not('.-padRow').each(tRow => {
        cy.wrap(tRow).find(homePageSelectors.tCell).eq(index).invoke('text').then(text => {
            authors.push(text);
        })
    }).then(() => {
        return authors;
    });
}

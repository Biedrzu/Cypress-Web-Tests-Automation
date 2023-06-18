declare namespace Cypress {
    interface Chainable<Subject> {
        checkIfLinkReturnsStatus(link: string, status: number): Chainable<void>;
        recursionLoop(times: number, yourFunction: any): Chainable<void>;
    }
}

Cypress.Commands.add('checkIfLinkReturnsStatus', (link: string, status: number) => {
    cy.get(link).then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', status);
    });
});

Cypress.Commands.add('recursionLoop', (yourFunction: any, times: number) => {
    if (typeof times === 'undefined') {
        times = 0;
    }

    cy.then(() => {
        const result = yourFunction(++times);
        if (result !== false) {
            cy.recursionLoop(yourFunction, times);
        }
    });
})

// Cypress.Commands.add('recursionLoop', { times: number }, function (fn, times) {
//     if (typeof times === 'undefined') {
//         times = 0;
//     }

//     cy.then(() => {
//         const result = fn(++times);
//         if (result !== false) {
//             cy.recursionLoop(fn, times);
//         }
//     });
// });

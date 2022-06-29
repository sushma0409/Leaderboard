// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

import 'cypress-iframe';

Cypress.Commands.add('Employee_token', () => {
    let access_token = '';
    cy.request({
        method: 'POST',
        url: `https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token`,
        form:true,
        body: {
            client_id:'leaderboard-ui',
            client_secret:'8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: "testemployee",
            password: "testemployee",
            grant_type:'password'
        }
    })
})

Cypress.Commands.add('Studiohead_token', () => {
    let access_token = '';
        cy.request({
        method: 'POST',
        url: `https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token`,
        form:true,
        body: {
            client_id:'leaderboard-ui',
            client_secret:'8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: "teststudiohead",
            password: "teststudiohead",
            grant_type:'password'
        }
    })
})

Cypress.Commands.add('Admin_token', () => {
    let access_token = '';
    cy.request({
        method: 'POST',
        url: `https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token`,
        form:true,
        body: {
            client_id:'leaderboard-ui',
            client_secret:'8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: "testadmin",
            password: "testadmin",
            grant_type:'password'
        }
    })
})

Cypress.Commands.add('Bhavya_token', () => {
    let access_token = '';
    cy.request({
        method: 'POST',
        url: `https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token`,
        form:true,
        body: {
            client_id:'leaderboard-ui',
            client_secret:'8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: "bhavya",
            password: "india1978",
            grant_type:'password'
        }
    })  
})
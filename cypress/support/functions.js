///<reference types = 'cypress'/>


cy.myfunctions = {
    createEmployeeToken: () => {

    let employee_token = '';

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
    }).then((response)=>{
        employee_token = response.body.access_token
    }) 

} 

} 

// Cypress.Commands.add('Employee_token', () => {

//     let employee_token = '';

//     cy.request({
//         method: 'POST',
//         url: `https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token`,
//         form:true,
//         body: {
//             client_id:'leaderboard-ui',
//             client_secret:'8090ed15-4cd1-483c-9fee-2a8b35941852',
//             username: "testemployee",
//             password: "testemployee",
//             grant_type:'password'
//         }
//     }).then((response)=>{
//         employee_token = response.body.access_token
//     })

// })


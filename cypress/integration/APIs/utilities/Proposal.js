export function addProposal(token, URL, requestBody, expectedStatusCode){
    cy.request({
        method: 'POST',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
        body: requestBody
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
export function getIndividualProposal(token, URL, expectedStatusCode, expectedResource){
    cy.request({
        method: 'GET',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource)    
    })
}
export function getProposalById(token, URL, expectedStatusCode, expectedResource){
    cy.request({
        method: 'GET',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource)
    })
}
export function getPendingProposal(token, URL, expectedStatusCode){
    cy.request({
        method: 'GET',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
export function getlistReviewedContribution(token, URL, expectedStatusCode){
    cy.request({
        method: 'GET',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
export function editProposal(token, URL, requestBody, expectedStatusCode){
    cy.request({
        method: 'PUT',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
        body: requestBody
    }).then((response)=>{
    expect(response.status).to.equal(expectedStatusCode)
    })
}
export function reviewProposal(token, URL, requestBody, expectedStatusCode){
    cy.request({
        method: 'PUT',
        url: URL,
        failOnStatusCode:false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
        body: requestBody
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
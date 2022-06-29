export function addContribution(token, URL, requestBody, expectedStatusCode, expectedResource, expectedValue){
    cy.request({
        method: 'POST',
        url: URL,
        failOnStatusCode: false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
        body: requestBody
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource, expectedValue)
    })
}
export function getallReviewedContribution(token, URL, expectedStatusCode){
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
export function editContribution(token, URL, requestBody, expectedStatusCode, expectedResource, expectedValue){
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
        expect(response.body).to.have.property(expectedResource, expectedValue)
    })
}
export function getApprovedContributionsForAll(token, URL, expectedStatusCode, expectedResource, expectedValue){
    cy.request({
        method: 'GET',
        url: URL,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource, expectedValue)
    })
}
export function getContibutionById(token, URL, expectedStatusCode, expectedResource, expectedValue){
    cy.request({
        method: 'GET',
        url: URL,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource, expectedValue)
    })
}
export function getKnolderContribution(token, URL, expectedStatusCode, expectedResource, expectedValue){
    cy.request({
        method: 'GET',
        url: URL,
        failOnStatusCode: false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource, expectedValue)
    })
}
export function listAllPendingContribution(token, URL, expectedStatusCode){
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
export function reviewUpdateContribution(token, URL, requestBody, expectedStatusCode){
    cy.request({
        method: 'PUT',
        url: URL,
        failOnStatusCode: false,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
        body: requestBody
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
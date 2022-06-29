export function getDaysSinceLast(token, URL, expectedStatusCode, expectedResource, expectedvalue){
    cy.request({
        method: 'GET',
        url: URL,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedResource,expectedvalue)
    })
}
export function getLastTwelve(token, URL, expectedStatusCode){
    cy.request({
        method: 'GET',
        url: URL,
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}
export function getAllUpcomingWebinar(token, URL, expectedStatusCode, expectedResource,expectedValue){ 
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
export function getStaticOverallContribution(token, URL, expectedStatusCode, expectedName, expectedvalue){ 
    cy.request({
        method: 'GET',
        url: URL,  
        headers:{
            'Authorization' : 'Bearer ' + token,
        },
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
        expect(response.body).to.have.property(expectedName, expectedvalue)
    })
}

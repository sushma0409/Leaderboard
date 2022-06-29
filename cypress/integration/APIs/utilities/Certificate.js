export function addCertificate(token, URL, requestBody, expectedStatusCode, expectedResource, expectedValue){
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
        expect(response.body).to.have.property(expectedResource,expectedValue)
    })
}
export function editCertificate(token, URL, requestBody, expectedStatusCode, expectedResource, expectedValue){
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
        expect(response.body).to.have.property(expectedResource,expectedValue)
    })
}

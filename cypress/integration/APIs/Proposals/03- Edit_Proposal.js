///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {editProposal} from '../utilities/Proposal'
describe('807 - BE: KIS - Edit the submitted proposal',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    let url = `https://backend-qa.knoldus.com/updateProposal?contributionId=10153`
    const body = {
        "proposalTitle": "Testing_QA_Automation",
        "challenge": "Postman",
        "possibleSolution": "Learning",
        "explanation": "API-Testing"
    }
    generateToken(token)
    it('LB-85 : As Employee, user should able to edit his own proposal',function(){
        editProposal(token.employee_token, url, body, 200)
    })
    it('LB-135 : As Studiohead, user should able to edit his own proposal',function(){
        url = `https://backend-qa.knoldus.com/updateProposal?contributionId=10024`
        editProposal(token.studiohead_token, url, body, 200)
    })
    it('LB-348 : User should not able to edit his own proposal if proposal title is greater than 100 character',function(){
        body.proposalTitle = 'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose'
        editProposal(token.studiohead_token, url, body, 500)        
    })
    it("LB-104 : User should not able to edit any other proposal as contributionId didn't belong to him",function(){
        editProposal(token.employee_token, url, body, 401)        
    }) 
    it('LB-103 : As Admin, user should able to edit his own proposal',function(){
        url = `https://backend-qa.knoldus.com/updateProposal?contributionId=10009`
        body.proposalTitle = 'Testing'
        editProposal(token.Admin_token, url, body, 200)        
    })
})
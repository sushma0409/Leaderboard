/// <reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {addProposal} from '../utilities/Proposal'
describe('702 - BE: Submission of KIS - Add a proposal',() =>{
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `https://backend-qa.knoldus.com/proposal`
    const body = {
        "proposalTitle": "Testing_QA",
        "challenge": "Selenium",
        "possibleSolution": "Learning",
        "explanation": "Browser-Testing"
    }
    generateToken(token)
    it('LB-79 : As Employee, user should able to add a proposal',()=>{
        addProposal(token.employee_token, url, body, 200)
    })
    it('LB-81 : As Studiohead, user should able to add a proposal',()=>{
        addProposal(token.studiohead_token, url, body, 200)
    })
    it('LB-82 : As Admin, user should able to add proposal',()=>{
        addProposal(token.Admin_token, url, body, 200)
    })
    it('LB-347 : User should not able to add proposal if proposal title is greater than 100 character',()=>{
        body.proposalTitle= "A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of for1862 - BE - Edit the Certificatemal writing, used to organize longer proseA paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of for1862 - BE - Edit the Certificatemal writing, used to organize longer prose. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of for1862 - BE - Edit the Certificatemal writing, used to organize longer proseA paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of for1862 - BE - Edit the Certificatemal writing, used to organize longer prose."
        addProposal(token.studiohead_token, url, body, 500)
    })
    it('LB-83 : User should not able to add proposal with any empty fields',()=>{
        body.challenge = ''
        addProposal(token.employee_token, url, body, 400)
    })
})
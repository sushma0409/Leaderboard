///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {getIndividualProposal} from '../utilities/Proposal'
describe('BE: KIS - View Individual proposal details',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `http://backend-qa.knoldus.com/myProposals`
    generateToken(token)
    it('LB-196 : As Employee, user can view all of his individual proposals details',function(){
        getIndividualProposal(token.employee_token, url, 200, 'resource')
    })
    it('LB-195 : As Studiohead, user can view all of his individual proposals details',function(){
        getIndividualProposal(token.studiohead_token, url, 200, 'resource')
    })
    it('LB-194 : As Admin, user can view all of his individual proposals details',function(){
       getIndividualProposal(token.Admin_token, url, 200, 'resource')
    })
})

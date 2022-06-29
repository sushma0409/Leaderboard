///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {getPendingProposal} from '../utilities/Proposal'
describe('1248 - BE: Updates the Admin role for fetching the pending proposal list',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: '',
        bhavya_token: ''
    }
    const url = `http://backend-qa.knoldus.com/proposals`
    generateToken(token)
    it('LB-87 : As Employee, user should not able to view the pending proposals list',function(){
        getPendingProposal(token.employee_token, url, 404)
    })
    it('LB-86 : As Studiohead, user should able to view all the pending proposals list',function(){   
       getPendingProposal(token.studiohead_token, url, 200)
    })
    it('LB-88 : As Admin, user should able to view the pending proposals list',function(){
        getPendingProposal(token.Admin_token, url, 200)
    })
    it('LB-89 : If any user has the Admin role, it will supercede all the other rights & display all proposal',function(){
        getPendingProposal(token.bhavya_token, url, 200)
    })
})
///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {getProposalById} from '../utilities/Proposal'
describe('BE: KIS - View proposal by id',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `http://backend-qa.knoldus.com/proposals/proposal?id=7435`
    generateToken(token)
    it('LB-124 : As Employee, user can view proposals by id',function(){
       getProposalById(token.employee_token, url, 200, 'resource')
    })
    it('LB-122 : As Studiohead, user can view proposals by id',function(){
        getProposalById(token.studiohead_token, url, 200, 'resource')
    })
    it('LB-121 : As Admin, user can view proposals by id',function(){
        getProposalById(token.Admin_token, url, 200, 'resource')        
    })
})

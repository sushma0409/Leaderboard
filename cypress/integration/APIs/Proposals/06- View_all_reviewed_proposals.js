///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {getlistReviewedContribution} from '../utilities/Proposal'
describe('828 - BE: View list of all Reviewed Proposals',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `http://backend-qa.knoldus.com/ReviewedContribution?pageNumber=1&limit=100`
    generateToken(token)
    it('LB-133 : As Employee, user cannot view all the reviewed proposals',function(){
        getlistReviewedContribution(token.employee_token, url, 404)
    })
    it('LB-76 : As Studiohead, user can view all reviewed proposals of their studio members',function(){
        getlistReviewedContribution(token.studiohead_token, url, 200)
    })
    it('LB-77 : As Admin,user can view all the reviewed proposals',function(){  
        getlistReviewedContribution(token.Admin_token, url, 200)
    })
})

///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {getallReviewedContribution} from "../utilities/Contribution"
describe('BE - Get all Reviewed Contributions',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/ReviewedContribution?pageNumber=1&limit=100'
    generateToken(token);
    it('LB-259 : As Employee, user should not able to see the list of reviewed contributions',function(){
        getallReviewedContribution(token.employee_token, url,  404)  
    })
    it('LB-260 : As Studiohead, user should able to view the list of reviewed contributions',function(){
        getallReviewedContribution(token.studiohead_token, url,  200)   
    })
    it('LB-261 : As Admin, user should able to view the list of all reviewed contributions within the organization',function(){
        getallReviewedContribution(token.Admin_token, url,  200)  
    })
})

///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {getApprovedContributionsForAll} from "../utilities/Contribution"
describe('BE - Get Approved contribution for all',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/contribution/getApprovedContributionsForAll?pageNumber=1&limit=100';
    generateToken(token);
    it('LB-270 : As Employee, user should able to view approved contributions for all',function(){
        getApprovedContributionsForAll(token.employee_token, url,  200, 'resource', 'getApprovedContributionsForAll')      
    })
    it('LB-269 : As Studiohead, user should able to view approved contribution for all',function(){
        getApprovedContributionsForAll(token.studiohead_token, url,  200, 'resource', 'getApprovedContributionsForAll')
    })
    it('LB-268 : As Admin, user should able to view approved contribution for all',function(){   
        getApprovedContributionsForAll(token.Admin_token, url,  200, 'resource', 'getApprovedContributionsForAll')
    })
})

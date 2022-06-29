///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {listAllPendingContribution} from "../utilities/Contribution"
describe('BE - Get all Pending Contributions',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url="http://backend-qa.knoldus.com/contribution/allContribution?pageNumber=1&limit=100";
    generateToken(token);
    it('LB-262 : As Employee, user should not able to view the list of pending contributions ',function(){
        listAllPendingContribution(token.employee_token,url,  404)        
    })
    it('LB-263 : As Studiohead, user should able to view the list of pending contributions ',function(){
        listAllPendingContribution(token.studiohead_token,url,  200)        
    })
    it('LB-264 : As Admin, user should able to view the list of all pending contributions within the organization',function(){   
        listAllPendingContribution(token.Admin_token,url,  200)
    })
})

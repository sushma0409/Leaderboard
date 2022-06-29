///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {getKnolderContribution} from "../utilities/Contribution"
describe('BE - Get knolder Contribution',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url="http://backend-qa.knoldus.com/contribution/getKnolderContribution?pageNumber=1&limit=20";
    generateToken(token);
    it('LB-208 : As Employee, user can view all his contribution',function(){
        getKnolderContribution(token.employee_token, url,  200, 'resource', '/contribution/getKnolderContribution')
    })
    it('LB-209 : As Studiohead, user can view all his contribution',function(){
        getKnolderContribution(token.studiohead_token, url,  200, 'resource', '/contribution/getKnolderContribution')
    })
    it('LB-210 : As Admin, User can view all his contribution',function(){    
        getKnolderContribution(token.Admin_token, url,  200, 'resource', '/contribution/getKnolderContribution')
    })
})

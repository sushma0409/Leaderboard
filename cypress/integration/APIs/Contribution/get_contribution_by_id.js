///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {getContibutionById} from "../utilities/Contribution"
describe('BE - Get contribution by Id',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url="http://backend-qa.knoldus.com/contribution?contributionId=10044";
    generateToken(token);
    it('LB-265 : As Employee, user should able to view the contribution by id ',function(){
        getContibutionById(token.employee_token, url,  200, 'resource', 'contribution')
    })
    it('LB-266 : As Studiohead, user should able to view contribution by Id',function(){   
        getContibutionById(token.studiohead_token, url,  200, 'resource', 'contribution')
    })
    it('LB-267 : As Admin, user should able to view contribution by Id ',function(){   
        getContibutionById(token.Admin_token, url,  200, 'resource', 'contribution')
    })
})

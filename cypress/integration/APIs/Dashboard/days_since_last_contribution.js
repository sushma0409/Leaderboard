///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {getDaysSinceLast} from '../utilities/Dashboard'
describe('BE - Days Since Last Contribution',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `http://backend-qa.knoldus.com/contribution/last`
    generateToken(token)
    it('LB-184 : As Employee, user should be able to view the Days since the last contribution',function(){
        getDaysSinceLast(token.employee_token, url, 200, 'resource', 'contribution')
    })
    it('LB-185 : As Studiohead, user should be able to view the Days since the last contribution ',function(){
        getDaysSinceLast(token.studiohead_token, url, 200, 'resource', 'contribution')
    })
    it('LB-186 : As Admin, user should be able to view the Days since the last contribution',function(){
        getDaysSinceLast(token.Admin_token, url, 200, 'resource', 'contribution')
    })
})

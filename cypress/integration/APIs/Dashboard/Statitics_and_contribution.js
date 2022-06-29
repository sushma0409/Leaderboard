///<reference types = 'cypress'/>
import { getStaticOverallContribution } from '../utilities/Dashboard'
import {generateToken} from '../utilities/TokenGeneration'
describe('BE - Statistics & Overall Contribution Breakdown',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    let url = `http://backend-qa.knoldus.com/reputation/415`
    generateToken(token)
    it('LB-190 : As Employee, user can view his statistics & Overall Contributions Breakdown',function(){
        getStaticOverallContribution(token.employee_token, url, 200, 'knolderName', 'test employee')
    })
    it('LB-191 : As Studiohead, user can view his statistics & Overall Contributions Breakdown',function(){
        url = `http://backend-qa.knoldus.com/reputation/413`
        getStaticOverallContribution(token.studiohead_token, url, 200, 'knolderName', 'test studiohead')
    })
    it('LB-192 : As Admin, user can view his statistics & Overall Contributions Breakdown',function(){
        url = `http://backend-qa.knoldus.com/reputation/414`
        getStaticOverallContribution(token.Admin_token, url, 200, 'knolderName', 'test admin')
    })
})

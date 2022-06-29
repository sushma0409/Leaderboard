///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import { getAllUpcomingWebinar } from "../utilities/Dashboard"
const token = {
    employee_token: '',
    studiohead_token: '',
    Admin_token: ''
}
const url = `http://backend-qa.knoldus.com/webinar/upcoming`
generateToken(token)
describe('BE - Upcoming Webinar',function(){
    it('LB-182 : As Employee, user can view all the upcoming Webinar',function(){
        getAllUpcomingWebinar(token.employee_token, url, 200, 'resource', 'getAllUpcomingWebinar')
    })
    it('LB-181 :  As Studiohead, User can view all the upcoming Webinar',function(){
        getAllUpcomingWebinar(token.studiohead_token, url, 200, 'resource', 'getAllUpcomingWebinar')
    })
    it('LB-183 : As Admin, User can view all the upcoming Webinar ',function(){
        getAllUpcomingWebinar(token.Admin_token, url, 200, 'resource', 'getAllUpcomingWebinar')
    })
})

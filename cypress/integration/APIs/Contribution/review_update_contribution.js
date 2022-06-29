///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {reviewUpdateContribution} from "../utilities/Contribution"
describe('738 - BE: KIS - Studio head - Review submitted proposals',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/contribution';
     const body={
        "contributionId" : 10040,
        "status":"APPROVED",                    
        "remark":"good"
}
    generateToken(token);
    it('LB-216 : As Employee, user should not able to review/update the status of contribution',function(){
        reviewUpdateContribution(token.employee_token, url, body, 404)
    })
    it('LB-217 : As Studiohead, User can review/update the status of any contribution of his studio members',function(){
        reviewUpdateContribution(token.studiohead_token, url, body, 200)
    })
    it('LB-219 : User cannot review/update the status of any contribution once it is approved /rejected',function(){
        reviewUpdateContribution(token.Admin_token, url, body, 200)
    })
    it('LB-220 : Studiohead cannot review the status of any contribution for other studio members',function(){   
        body.contributionId = 10155
        reviewUpdateContribution(token.studiohead_token, url, body, 404)
    })
    it('LB-218 : As Admin, user can review/update the status of any contribution',function(){
        body.contributionId = 10046
        reviewUpdateContribution(token.Admin_token, url, body, 200)
    })
})

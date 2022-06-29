///<reference types = 'cypress'/>
import {reviewProposal} from '../utilities/Proposal'
import {generateToken} from '../utilities/TokenGeneration'

describe('738 - BE: KIS - Studio head - Review submitted proposals',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = `https://backend-qa.knoldus.com/proposal/editProposal`
    const body = {
        "id": 10007,
        "status": "APPROVED",
        "remark": "Good Contribution" 
}
    generateToken(token)
    it('LB-134 : As Employee, user should not able to review any submitted proposals',function(){
        reviewProposal(token.employee_token, url, body, 404)
    })
    it('LB-78 : As Studiohead, user should able to review the submitted proposals of their studio members',function(){
        reviewProposal(token.studiohead_token, url, body, 200)
    })
    it('LB-80 : As Studiohead, user should not able to review submitted proposals for other studio members',function(){
        body.id = 9969
        reviewProposal(token.studiohead_token, url, body, 404)
    })
    it('LB-107 : As Admin, user should able to review all the submitted proposals',function(){
        reviewProposal(token.Admin_token, url, body, 200)
    })
    it('LB-350 : As Studiohead, user should not able to review his own submitted proposal ',function(){
        body.id = 10091
        reviewProposal(token.studiohead_token, url, body, 200)
    })
    it('LB-349 : User should not able to review submitted proposal with any field missing',function(){
        body.status = ''
        reviewProposal(token.Admin_token, url, body, 400)
    })
})


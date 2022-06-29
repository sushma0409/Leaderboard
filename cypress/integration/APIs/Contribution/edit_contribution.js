///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {editContribution} from "../utilities/Contribution"
describe('BE - Edit any contribution',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/contribution/editContribution';
    const body={
        "contributionId" : 10044,
        "contributionType": "Conference",
        "title": "TAU: Introduction to Postman",
        "contributionDate": "2022-06-08 1:27:13.000",
        "technologyDetails": "Postman",
        "urlDetails" : "https://does.com "+Math.random()
    }
    generateToken(token);
    it('LB-254 : As Employee, User can edit his own contribution',function(){
        editContribution(token.employee_token, url, body, 200, 'resource', 'editContribution')
    })
    it('LB-255 : As Studiohead, user can edit his own contribution',function(){ 
        body.contributionId = 10041
        body.urlDetails = "https://does.com "+Math.random()
        editContribution(token.studiohead_token, url, body, 200, 'resource', 'editContribution')
    })
    it('LB-256 : As Admin, User can edit his own contribution',function(){
        body.contributionId = 9916
        body.urlDetails = "https://does.com "+Math.random()
        editContribution(token.Admin_token, url, body, 200, 'resource', 'editContribution')
    })
    it('LB-257 : User cannot edit his contribution with existed URL ',function(){
        body.urlDetails='http://nbdaskd.com/'
        editContribution(token.employee_token, url, body, 422, 'resource', 'editContribution')
    })
    it('LB-258 : User cannot edit his contribution with any empty fields',function(){
        body.urlDetails=''
        editContribution(token.employee_token, url, body, 422, 'resource', 'editContribution')
    })
})
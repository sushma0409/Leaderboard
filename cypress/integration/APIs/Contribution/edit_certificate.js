///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {editCertificate} from "../utilities/Certificate"
describe('1862 - BE - Edit the Certificate',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/contribution/editContribution'
    const body={
        "contributionId" : 10044,
        "contributionType": "Certification",
        "title": "TAU: Introduction to Postman",
        "contributionDate": "2022-06-08 1:27:13.000",
        "technologyDetails": "Postman",
        "urlDetails" : "https://tesu.applitools.com"+Math.random()
    }
    generateToken(token);
    it('LB-211 : As Employee, User can edit his own contribution',function(){
        editCertificate(token.employee_token,url, body, 200, 'resource', 'editContribution')
    })
    it('LB-212 : As Studiohead, user can edit his own contribution',function(){
        body.contributionId = 10048
        body.urlDetails = "https://tesu.applitools.com"+Math.random()
        editCertificate(token.studiohead_token,url, body, 200, 'resource', 'editContribution')
    })
    it('LB-213 : As Admin, User can edit his own contribution',function(){
        body.contributionId = 10049
        body.urlDetails = "https://tesu.applitools.com"+Math.random()
        editCertificate(token.Admin_token,url, body, 200, 'resource', 'editContribution')
    })
    it('LB-214 : User cannot edit his contribution with existed URL ',function(){
        body.urlDetails='http://nbdaskd.com/'
        editCertificate(token.employee_token, url, body, 422, 'resource', 'editContribution')
    })
    it('LB-215 : User cannot edit his contribution with any empty fields',function(){
        body.title=''
        editCertificate(token.employee_token, url, body, 422, 'resource', 'editContribution')
    })
})

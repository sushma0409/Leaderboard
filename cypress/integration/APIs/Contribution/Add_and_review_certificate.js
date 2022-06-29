///<reference types = 'cypress'/>
import {generateToken} from "../utilities/TokenGeneration"
import {addCertificate} from "../utilities/Certificate"
describe('1859 - BE - Add and review certificate (Implementation)',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    let url = 'https://backend-qa.knoldus.com/contribution/addContribution';
    const body = {
        "contributionType": "Certification",
        "title": "Introduction to Postman",
        "contributionDate": "2022-06-09 10:20:13.000",
        "technologyDetails": "Selenium",
        "urlDetails" : "https://testautomationu.applitools"+Math.random()+".com"
    }
    generateToken(token);
    it('LB-203 : As Employee, user can add certification as a contribution type ',function(){
        addCertificate(token.employee_token, url, body, 200, 'resource', 'contribution')
    })
    it('LB-204 : As Studiohead, User can add certification as a contribution type',function(){
        body.urlDetails = "https://testautomationu.applitools"+Math.random()+".com"
        addCertificate(token.studiohead_token, url, body, 200, 'resource', 'contribution')
    })
    it('LB-205 : As Admin, user can add certification as a contribution type ',function(){
        body.urlDetails = "https://testautomationu.applitools"+Math.random()+".com"
        addCertificate(token.Admin_token, url, body, 200, 'resource', 'contribution')
    })
    it('LB-206 : User cannot add certification as a contribution type with existed URL',function(){
        body.urlDetails = 'https://does.com'
        addCertificate(token.employee_token, url, body, 400, 'resource', 'contribution')
    })
    it('LB-207 : User cannot add certification as a contribution type with any empty field',function(){
        body.title = ''
        addCertificate(token.employee_token, url, body, 400, "resource","contribution")    
    })
})

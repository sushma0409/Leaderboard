///<reference types = 'cypress'/>
import {generateToken} from '../utilities/TokenGeneration'
import {addContribution} from '../utilities/Contribution'
describe('BE - Add any contribution',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    const url = 'https://backend-qa.knoldus.com/contribution/addContribution';
    const body={
        "contributionType": "Conference",
        "title": "Introduction to Selenium",
        "contributionDate": "2022-06-09 10:20:13.000",
        "technologyDetails": "Selenium",
        "urlDetails" : "https://does"+Math.random()+".com"
    }
    generateToken(token);
    it('LB-226 : As Employee, user can add any contribution',function(){
        addContribution(token.employee_token,url, body, 200, 'resource', 'contribution')
    })
     it('LB-249 : As Studiohead, user can add any contribution',function(){
           body.urlDetails = "https://does"+Math.random()+".com"
        addContribution(token.studiohead_token,url, body, 200, 'resource', 'contribution')
     })
    it('LB-250 : As Admin, user can add any contribution',function(){  
        body.urlDetails = "https://does"+Math.random()+".com"
        addContribution(token.Admin_token,url, body, 200, 'resource', 'contribution')
    })
     it('LB-251 : User cannot add contribution with existed URL',function(){
        body.urlDetails='https://does.com'
        addContribution(token.employee_token,url, body, 400, 'resource', 'contribution')
     })
    it('LB-252 : User cannot add contribution with any empty field',function(){ 
        body.urlDetails=''
        addContribution(token.employee_token,url, body, 400, 'resource', 'contribution')
 })
})
///<reference types = 'cypress'/>
import {getLastTwelve } from '../utilities/Dashboard'
import {generateToken} from '../utilities/TokenGeneration'
describe('BE - Last 12 months history',function(){
    const token = {
        employee_token: '',
        studiohead_token: '',
        Admin_token: ''
    }
    let url = `http://backend-qa.knoldus.com/reputation/twelvemonths/415`
    generateToken(token)
    it('LB-187 : Employee should able to view his last 12 month contribution history',function(){
        getLastTwelve(token.employee_token, url, 200)
    })
    it('LB-188 : Studiohead should able to view his last 12 month contribution history ',function(){
        url = `http://backend-qa.knoldus.com/reputation/twelvemonths/413`
        getLastTwelve(token.studiohead_token, url, 200)
    })
    it('LB-189 : Admin should able to view his last 12 month contribution history',function(){
        url = `http://backend-qa.knoldus.com/reputation/twelvemonths/414`
        getLastTwelve(token.Admin_token, url, 200)
    })
})

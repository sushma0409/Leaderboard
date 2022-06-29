///<reference types='cypress' />
class Login
{
    visit()
    {
        cy.visit('http://leaderboard-qa.knoldus.com/')
    }
    fillEmail(value){
        const field = cy.get('#username')
        field.clear()
        field.type(value)
        return this
    }
    fillPassword(value){
        const field = cy.get('#password')
        field.clear()
        field.type(value)
        return this
    }
    signin(){
        const button = cy.get('#kc-login')
        button.click()  
    }
}
export default Login
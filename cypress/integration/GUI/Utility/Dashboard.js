///<reference types = 'cypress'/>
import Login from '../PageObject/LoginPage'
class Dashboard
{
    Employee(){
        cy.viewport(1280,720)
        const lg = new Login()
        lg.visit()
        cy.wait(1000)      
        cy.get('#kc-page-title').should('contain','Sign in to your account')                         
        lg.fillEmail('testemployee')
        lg.fillPassword('testemployee')
        lg.signin()
    }
    Studiohead(){
        cy.viewport(1280,720)
        const lg = new Login()
        lg.visit()
        cy.wait(1000)      
        cy.get('#kc-page-title').should('contain','Sign in to your account')                         
        lg.fillEmail('teststudiohead')
        lg.fillPassword('teststudiohead')
        lg.signin()
    }
    Admin(){
        cy.viewport(1280,720)
        const lg = new Login()
        lg.visit()
        cy.wait(1000)      
        cy.get('#kc-page-title').should('contain','Sign in to your account')                         
        lg.fillEmail('testadmin')
        lg.fillPassword('testadmin')
        lg.signin()
    }
}
export default Dashboard
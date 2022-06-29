///<reference types ='cypress'/>
class Studios
{
    Devops(){
        const button = cy.get('div[class="card-header px-0 pt-0 head d-flex studio-card"]').contains(' DevOps Studio ')
        button.click()
    }
    AccountManagement(){
        const button = cy.get('div[class="card-header px-0 pt-0 head d-flex department-card"]').contains(' Account Management ')
        button.click()
    }
    FrontEnd(){
        const button= cy.get('div[class="card-header px-0 pt-0 head d-flex studio-card"]').contains(' Frontend Studio ')
        button.click()
    }
    AIStudio(){
        const button= cy.get('div[class="card-header px-0 pt-0 head d-flex studio-card"]').contains(' AI/ML Studio ')
        button.click()
    }
    Scala(){
        const button= cy.get('div[class="card-header px-0 pt-0 head d-flex studio-card"]').contains(' Scala Studio ')
        button.click()
    }
    Agile(){
        const button= cy.get('div[class="card-header px-0 pt-0 head d-flex studio-card"]').contains(' Agile Studio ')
        button.click()
    }
}
export default Studios
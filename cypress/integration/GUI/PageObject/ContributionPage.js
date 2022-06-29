///<reference types='cypress'/>
class Contribution{
    MyContribution(){
        const button = cy.get('a[class="tabs text-white bg-gradient-primary active"]')
        button.click()
    }
    Edit(){
        const button = cy.get('span[class="material-icons"]').contains(' edit ')
        button.click()
    }
    View(){
        const button = cy.get('span[class="material-icons mx-2"]').contains(' visibility ')
        button.click()
    }
    Exit(){
        const button = cy.get('button[class="btn btn-primary text-white mx-2"]')
        button.click()     
    }
    AllContribution(){
        const button = cy.get('a[href="/contribution/viewApprovedContributions"]')
        button.click()
    }
    Approvals(){
        const button = cy.get('a[href="/contribution/viewAllContributions"]')
        button.click()
    }
    Approve(){
        const button = cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > .approve')
        button.click()
    }
    confirmApprove(){
        const option = cy.get('.buttons > .btn-primary').should('have.text','Approve')
        option.click()
    }
    Reject(){
        const button = cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > .reject')
        button.click()
    }
    confirmReject(){
        const option = cy.get('button[class="btn btn-primary m-2"]').should('have.text','Reject')
        option.click()
    }
    AddContribution(){
        const button = cy.get('button[class="btn btn-primary"]')
        button.click()
    }
}
export default Contribution
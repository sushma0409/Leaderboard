///<reference types= 'cypress'/>
class AddContribution{
    Title(value){
        const field = cy.get('input[formcontrolname="title"]')
        field.clear()
        field.type(value)
        return this
    }
    ContributionType(value){
        cy.get('#contributionType').select(value)
    }
    ContributionDate(value){
        const field = cy.get('#contributionDate')
        field.clear()
        field.type(value)
        return this
    }
    Technology(value){
        const field = cy.get('textarea[formcontrolname="technologyDetails"]')
        field.clear()
        field.type(value)
        return this
    }
    UrlDetail(){
        let randomtext = ""
            let url_details = ""
            var pattern = "abcdefghijklmnopqrstuvwxyz"
            for (var i=0; i<10; i++){
            randomtext+=pattern.charAt(Math.floor(Math.random()*pattern.length))
            url_details = 'https://www.'+ randomtext + '.com/'
         }
        cy.get('.col.mb-3 > .form-control').type(url_details)
    }
    Submit(){
        const button = cy.get('button[class="btn btn-primary text-white mx-2"]')
        button.click()
    }
}
export default AddContribution
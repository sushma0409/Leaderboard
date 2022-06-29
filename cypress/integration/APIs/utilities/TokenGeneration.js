export function generateToken(Reference){
    it('Generate token', function(){
        cy.Employee_token().then((response)=>{
            Reference.employee_token = response.body.access_token
         })
         cy.Studiohead_token().then((response)=>{
            Reference.studiohead_token = response.body.access_token
         })
         cy.Admin_token().then((response)=>{
            Reference.Admin_token = response.body.access_token
         })
         cy.Bhavya_token().then((response)=>{
            Reference.bhavya_token = response.body.access_token
         })
    })
}
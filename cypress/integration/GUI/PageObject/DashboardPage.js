///<reference types='cypress'/>
class Menu
{
    BoardDropdown(value){
        const button = cy.get('div[class="nav-link ps-0 text-white collapsed"]').contains(' Leaderboard ')
        button.click()
    }
    Summary(){
        const button = cy.get('span[class="sidenav-normal ms-2 ps-1"]').contains(' Summary ')
        button.click({force:true})
    }
    studios(){
        const button = cy.get('span[class="sidenav-normal ms-2 ps-1"]').contains(' Studios ')
        button.click({force:true})
    }
    contribution(){
        const button = cy.get('span[class="sidenav-normal ms-2 ps-1"]').contains(' Contribution ')
        button.click({force:true})
    }
} 
export default Menu
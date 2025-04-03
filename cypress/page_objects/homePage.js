class homePage {

    visit() {
        return cy.visit('/home')
    }

    logoImg() {
        return cy.get('.logo-img')
    }
     
}
module.exports = new homePage();
class homePage {

    visit() {
        return cy.visit('/home')
    }

    logoImg() {
        return cy.get('.logo-img')
    }

    homeTxt() {
        return cy.get('.navbar-list > :nth-child(1)')
    }

    imamsTxt() {
        return cy.get('.navbar-list > :nth-child(2)')
    }

    treasurersTxt () {
        return cy.get('.navbar-list > :nth-child(3)')
    }

    jamaatsTxt () {
        return cy.get('.navbar-list > :nth-child(4)')
    }

    householdsTxt () {
        return cy.get('.navbar-list > :nth-child(5)')
    }

    cemeteriesTxt () {
        return cy.get('.navbar-list > :nth-child(6)')
    }

    weddingsTxt () {
        return cy.get('.navbar-list > :nth-child(7)')
    }

    bornsTxt () {
        return cy.get('.navbar-list > :nth-child(8)')
    }

    deathsTxt () {
        return cy.get('.navbar-list > :nth-child(9)')
    }

    maktabsTxt () {
        return cy.get('.navbar-list > :nth-child(10)')
    }

    usersTxt () {
        return cy.get('.navbar-list > :nth-child(11)')
    }

    logoutTxt () {
        return cy.get(':nth-child(12)')
    }

    addJamaatInp () {
        return cy.get(':nth-child(1) > .cta-content')
    }

    addImamInp () {
        return cy.get(':nth-child(2) > .cta-content')
    }

    addTreasurerInp () {
        return cy.get(':nth-child(3) > .cta-content')
    }

    addHouseholdInp () {
        return cy.get(':nth-child(4) > .cta-content')
    }

    addCemeteryInp () {
        return cy.get(':nth-child(5) > .cta-content')
    }

    addUserInp () {
        return cy.get(':nth-child(6) > .cta-content')
    }

    addBornInp () {
        return cy.get(':nth-child(7) > .cta-content')
    }

    addDeathInp () {
        return cy.get(':nth-child(8) > .cta-content')
    }

    addMaktabStudentInp () {
        return cy.get(':nth-child(9) > .cta-content')
    } 

    collapseWrapperImg () {
        return cy.get('.collapse-wrapper')
    }

    copyrightTxt () {
        return cy.get('.copyright')
    }

    jamaatTitTxt () {
        return cy.get(':nth-child(1) > .cta-content > .cta-title')
    }

    jamaatDesTxt () {
        return cy.get(':nth-child(1) > .cta-content > .cta-description')
    }

    jamaatBtn () {
        return cy.get(':nth-child(1) > .cta-content > .mdc-button > .mdc-button__label')
    }

    jamaatsTitTxt () {
        return cy.get('h1')
    }

    jamaatInp () {
        return cy.get('#name')
    }

    savejamaatBtn () {
        return cy.get('.MuiButtonBase-root')
    }

    imamTitTxt () {
        return cy.get(':nth-child(2) > .cta-content > .cta-title')
    }

    imamDesTxt () {
        return cy.get(':nth-child(2) > .cta-content > .cta-description')
    }

    imamBtn () {
        return cy.get(':nth-child(2) > .cta-content > .mdc-button > .mdc-button__label')
    }
    

}
module.exports = new homePage();
class householdsPage {

    visit () {
        return cy.visit('/households')
    }

    householdsTitTxt () {
        return cy.get('h1')
    }

    householdAddressInp () {
        return cy.get('#address')
    }

    householdPhoneInp () {
        return cy.get('#phoneHome')
    }

    householdMobInp () {
        return cy.get('#phoneMobile')
    }

    householdDzeInp () {
        return cy.get('#jamaat')
    }

    householdDzeVRInp () {
        return cy.get('[data-value="6"]')
    }

    householdEntryDateInp () {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    householdEmailInp () {
        return cy.get('#email')
    }

    householdIncDataInp () {
        return cy.get(':nth-child(2) > .MuiFormControlLabel-root')
    }

    householdFeeInp () {
        return cy.get(':nth-child(3) > .MuiFormControlLabel-root')
    }

    householdNoteInp () {
        return cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root')
    }

    householdSaveBtn () {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }


}
module.exports = new householdsPage();
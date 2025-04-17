class deathsPage {

    visit () {
        return cy.visit('/deaths')
    }

    bornsTitTxt () {
        return cy.get('h1')
    }

    deathNameInp () {
        return cy.get('#fname')
    }

    deathSurnameInp () {
        return cy.get('#lname')
    }

    deathSexInp () {
        return cy.get('#education')
    }

    deathSexFInp() {
        return cy.get('[data-value="Žensko"]')
    }

    deathBirthDateInp () {
        return cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    deathBirthPlaceInp () {
        return cy.get('#birthPlace')
    }

    deathFatherNameInp () {
        return cy.get('#fatherName')
    }

    deathMotherNameInp () {
        return cy.get('#motherName')
    }

    deathDateInp () {
        return cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    deathCauseInp () {
        return cy.get('#deathCause')
    }

    deathFuneralDateInp () {
        return cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    deathFuneralPlaceInp () {
        return cy.get('#funeralPlace')
    }

    deathFuneralPlaceDInp () {
        return cy.get('[data-value="Dobrinja"]')
    }

    deathImamInp () {
        return cy.get('#imam')
    }

    deathImamOptionInp () {
        return cy.get('[data-value="2"]')
    }

    deathSaveBtn () {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }

    searchInp () {
        return cy.get('.MuiInputBase-root')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    deathLNameInp () {
        return cy.get('[data-field="lname"] > .MuiDataGrid-cellContent')
    }

    
}
module.exports = new deathsPage();
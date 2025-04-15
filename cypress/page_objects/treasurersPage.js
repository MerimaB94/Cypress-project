class treasurersPage {

    visit () {
        return cy.visit('/treasurers')
    }

    treasurersTitTxt () {
        return cy.get('h1')
    }

    treasurerNameInp () {
        return cy.get('#fname')
    }

    treasurerSurnameInp () {
        return cy.get('#lname')
    }

    treasurerMiddleNameInp () {
        return cy.get('#fatherName')
    }

    treasurerJmbgInp () {
        return cy.get('#jmbg')
    }

    treasurerBirthPlaceInp () {
        return cy.get('#birthPlace')
    }

    treasurerBirthDateInp () {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    treasurerSaveBtn () {
        return cy.get(':nth-child(7) > .MuiButtonBase-root')
    }

    searchInp () {
        return cy.get('#searchField')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    treasurerFieldName () {
        return cy.get('[data-field="fname"] > .MuiDataGrid-cellContent')
    }

}
module.exports = new treasurersPage();
class bornsPage {

    visit () {
        return cy.visit('/borns')
    }

    bornsTitTxt () {
        return cy.get('h1')
    }

    bornNameInp () {
        return cy.get('#fname')
    }

    bornSurnameInp () {
        return cy.get('#lname')
    }

    bornSexInp () {
        return cy.get('#education')
    }

    bornSexFTxt() {
        return cy.get('[data-value="Žensko"]')
    }

    bornBirthDateInp () {
        return cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    bornBirthPlaceInp () {
        return cy.get('#birthPlace')
    }

    bornFatherNameInp () {
        return cy.get('#fatherName')
    }

    bornMotherNameInp () {
        return cy.get('#motherName')
    }

    bornAkikaDateInp () {
        return cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    bornImamInp () {
        return cy.get('#imam')
    }

    bornImamOptionInp () {
        return cy.get('[data-value="22"]')
    }

    bornSaveBtn () {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }

    searchInp () {
        return cy.get('.MuiInputBase-root')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    bornFieldNameInp () {
        return cy.get('[data-field="fname"] > .MuiDataGrid-cellContent')
    }


}
module.exports = new bornsPage();
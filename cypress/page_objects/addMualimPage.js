class addMualimPage{

    visit () {
        return cy.visit('/maktabs/addmualim')
    }

    maktabMualimTitTxt () {
        return cy.get('.modal-header > h1')
    }

    nameInp () {
        return cy.get('#fname')
    }

    surnameInp () {
        return cy.get('#lname')
    }

    jmbgInp () {
        return cy.get('#jmbg')
    }

    fatherNameInp () {
        return cy.get('#fatherName')
    }

    motherNameInp () {
        return cy.get('#motherName')
    }

    birthdateInp () {
        return cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    phoneInp () {
        return cy.get('#phone')
    }

    emailInp () {
        return cy.get('#email')
    }

    entryDateInp () {
        return cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    saveBtn () {
        return cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root')
    }

}
module.exports = new addMualimPage();
class usersPage {

    visit () {
        return cy.visit('/users')
    }

    usersTitTxt () {
        return cy.get('.page-section-main-content > :nth-child(1)')
    }

    userEmailInp () {
        return cy.get('#email')
    }

    userNameInp () {
        return cy.get('#username')
    }

    userActiveTxt () {
        return cy.get('.MuiTypography-root')
    }

    userSaveBtn () {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }

    userRightsTxt () {
        return cy.get('.page-section-main-content > :nth-child(3)')
    }

    searchInp () {
        return cy.get('.MuiInputBase-root')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    
}
module.exports = new usersPage();
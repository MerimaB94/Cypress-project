class cemeteriesPage {

    visit () {
        return cy.visit('/cemeteries')
    }

    cemeteriesTitTxt () {
        return cy.get('h1')
    }

    cemeteryNameInp () {
        return cy.get('#name')
    }

    cemeterySaveBtn () {
        return cy.get('.MuiButtonBase-root')
    }

    searchInp () {
        return cy.get('#searchField')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    cemeteryFieldName () {
        return cy.get('[data-field="name"] > .MuiDataGrid-cellContent')
    }

    
}
module.exports = new cemeteriesPage();
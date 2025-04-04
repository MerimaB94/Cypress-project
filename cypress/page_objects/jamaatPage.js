class jamaatPage {

    visit() {
        return cy.visit('/jamaats')
    }

    addjamaatInp () {
        return cy.get('.cta-content')
    }

    jamaatTitTxt () {
        return cy.get('.cta-title')
    }

    jamaatDesTxt () {
        return cy.get('.cta-description')
    }

    jamaatBtn () {
        return cy.get('.mdc-button__label')
    }

    searchInp () {
        return cy.get('.MuiInputBase-root')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    idHeaderTxt () {
        return cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer')
    }

    jamaatHeaderTxt () {
        return cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    changeHeaderTxt () {
        return cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    jamaatNameInp () {
        return cy.get('[data-field="name"] > .MuiDataGrid-cellContent')
    }

}
module.exports = new jamaatPage();
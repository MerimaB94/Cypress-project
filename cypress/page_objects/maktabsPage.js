class maktabsPage {

    visit () {
        return cy.visit('/maktabs')
    }

    maktabFrameInp () {
        return cy.get('.cta-content')
    }

    maktabTitTxt () {
        return cy.get('.cta-title')
    }

    maktabDesTxt () {
        return cy.get('.cta-description')
    }

    maktabBtn () {
        return cy.get('.mdc-button__label')
    }

    jamaatInp () {
        return cy.get('#jamaat')
    }

    mualimsTitTxt () {
        return cy.get(':nth-child(2) > h1')
    }

    addMualimBtn () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root')
    }

    tableMualimsInp () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root')
    }

    changeHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    idHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    nameHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    surnameHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    jmbgHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="5"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    fathernameHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    birthdateHeaderTxt () {
        return cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="7"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }
    
    studentsTitTxt() {
        return cy.get(':nth-child(3) > h1')
    }

    addStudentBtn () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-sm-6')
    }

    studentsTableInp () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders')
    }

    actionsHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    idHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    nameHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    surnameHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    jmbgHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="5"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    fathernameHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    birthdateHTxt () {
        return cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders > .MuiDataGrid-columnHeadersInner > .css-k008qs > [aria-colindex="7"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

}
module.exports = new maktabsPage();
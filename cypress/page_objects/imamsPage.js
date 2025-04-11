class imamsPage {

    visit () {
        return cy.visit('/imams')
    }

    imamsTitTxt () {
        return cy.get('h1')
    }

    imamNameInp () {
        return cy.get('#fname')
    }

    imamSurnameInp () {
        return cy.get('#lname')
    }

    imamMiddleNameInp () {
        return cy.get('#fatherName')
    }

    imamJmbgInp () {
        return cy.get('#jmbg')
    }

    imamBirthDateInp () {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    imamBirthPlaceInp () {
        return cy.get('#birthPlace')
    }

    imamJamaatInp () {
        return cy.get('#jamaat')
    }

    imamEduInp () {
        return cy.get('#education')
    }

    imamEduSSSInp () {
        return cy.get('[data-value="2"]')
    }

    imamSaveBtn () {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }

    addImamInp () {
        return cy.get('.cta-content')
    }

    searchInp () {
        return cy.get('.MuiInputBase-root')
    }

    searchImg () {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }

    changeHeaderTxt () {
        return cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    idHeaderTxt () {
        return cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    nameHeaderTxt () {
        return cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    surnameHeaderTxt () {
        return cy.get('[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    jmbgHeaderTxt () {
        return cy.get('[aria-colindex="5"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    middleNameHeaderTxt () {
        return cy.get('[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    birthPlaceHeaderTxt () {
        return cy.get('[aria-colindex="7"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

    birthDateHeaderTxt () {
        return cy.get('[aria-colindex="8"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
    }

}
module.exports = new imamsPage();
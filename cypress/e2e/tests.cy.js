import { faker } from '@faker-js/faker';
import loginPage from '../page_objects/loginPage'
import jamaatPage from '../page_objects/jamaatPage'
describe('Dzemat management app', () => {
  beforeEach(() => {
    loginPage.visit("/jamaat")
    loginPage.titleTxt().should("be.visible")
    loginPage.usernameInp().should("be.visible")
    loginPage.passwordInp().should("be.visible")
    loginPage.loginBtn().should("be.visible")
    loginPage.forgottenpassLink().should("be.visible")
    loginPage.usernameInp().type("admin")
    loginPage.passwordInp().type("admin")
    loginPage.loginBtn().click()
  })
  it('DP-1 Verify that admin user can login to Dzemat MGMT webpage', () => {
    cy.get('.logo-img').should("be.visible")
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/home')
  })

  it('DP-2 Verify the content of the Dzemat MGMT homepage', () => {
    cy.get('.logo-img').should("be.visible")
    cy.get('.navbar-list > :nth-child(1)').should("be.visible")
    cy.get('.navbar-list > :nth-child(2)').should("be.visible")
    cy.get('.navbar-list > :nth-child(3)').should("be.visible")
    cy.get('.navbar-list > :nth-child(4)').should("be.visible")
    cy.get('.navbar-list > :nth-child(5)').should("be.visible")
    cy.get('.navbar-list > :nth-child(6)').should("be.visible")
    cy.get('.navbar-list > :nth-child(7)').should("be.visible")
    cy.get('.navbar-list > :nth-child(8)').should("be.visible")
    cy.get('.navbar-list > :nth-child(9)').should("be.visible")
    cy.get('.navbar-list > :nth-child(10)').should("be.visible")
    cy.get('.navbar-list > :nth-child(11)').should("be.visible")
    cy.get(':nth-child(12)').should("be.visible")
    cy.get(':nth-child(1) > .cta-content').should("be.visible")
    cy.get(':nth-child(2) > .cta-content').should("be.visible")
    cy.get(':nth-child(3) > .cta-content').should("be.visible")
    cy.get(':nth-child(4) > .cta-content').should("be.visible")
    cy.get(':nth-child(5) > .cta-content').should("be.visible")
    cy.get(':nth-child(6) > .cta-content').should("be.visible")
    cy.get(':nth-child(7) > .cta-content').should("be.visible")
    cy.get(':nth-child(8) > .cta-content').should("be.visible")
    cy.get(':nth-child(9) > .cta-content').should("be.visible")
    cy.get('.collapse-wrapper').should("be.visible")
    cy.get('.copyright').should("be.visible")
  })
  it.only('DP-3 Add "džemat" in module "Početna" on Džemat MGMT dev env', () => {
    const randomCity = faker.location.city() + " " + faker.location.zipCode()
    cy.get(':nth-child(1) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(1) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(1) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(1) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/jamaats/add')
    cy.get('h1').should("be.visible")
    cy.get('#name').should("be.visible")
    cy.get('.MuiButtonBase-root').should("be.visible")
    cy.get('#name').type(randomCity)
    cy.get('.MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(4)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/jamaats')
    cy.get('.cta-content').should("be.visible")
    cy.get('.cta-title').should("be.visible")
    cy.get('.cta-description').should("be.visible")
    cy.get('.mdc-button__ripple').should("be.visible")
    cy.get('.page-section-main-content > :nth-child(2)').should("be.visible")
    cy.get('#searchField').should("be.visible")
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').should("be.visible")
    cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should("be.visible")
    cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should("be.visible")
    cy.get('.MuiInputBase-root').type(randomCity)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('[data-field="name"] > .MuiDataGrid-cellContent').contains(randomCity)
    //Ovdje kroz search input pretraziti prvo kreirani dzemat pa provjeriti je li imamo tog dzemata u rezultatima
    //
    //Takodjer, svaki put kad kreiras neki podatak trebalo bi da ima drugi naziv, zbog toga ce biti malo nezahvalno koristiti iste testne podatke
    //Ovdje konkretno sto u svakoj iteraciji ovog testa ce se kreirati dzemat s nazivom 'Test'
    //Tako da kad pretrazimo po rijeci 'Test' dobiti cemo vise istih rezultata i necemo znati koji od tih dzemata je iz ove iteracije kreiran
    //
    //Isto vrijedi i za naredne testove. Moras svaki zapis pretraziti pa da ti izbaci rezultat, tako ces biti najsigurnija u ishode
    //
    //Koristeci NPM paket Faker.js mozes jednostavno generisati nove rijeci za upotrebu, mozemo na jednom mentorskom satu proci kroz
  })
  it('DP-4 Add "imam" in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(2) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(2) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(2) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(2) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/imams/add')
    cy.get('h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#lname').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#jmbg').should("be.visible")
    cy.get('#birthPlace').should("be.visible")
    cy.get('#jamaat').should("be.visible")
    cy.get('#education').should("be.visible")
    cy.get('.MuiFormControlLabel-root').should("be.visible")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Merima")
    cy.get('#lname').type("Test")
    cy.get('#fatherName').type("Samir")
    cy.get('#jmbg').type("6666666666666666")
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('20021988')
    cy.get('#birthPlace').type("Sanski Most")
    cy.get('#education').click()
    cy.get('[data-value="2"]').click()
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(2)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/imams')
    cy.get('.cta-content').should("be.visible")
    cy.get('.cta-title').should("be.visible")
    cy.get('.cta-description').should("be.visible")
    cy.get('.mdc-button__ripple').should("be.visible")
    cy.get('.page-section-main-content > :nth-child(2)').should("be.visible")
    cy.get('#searchField').should("be.visible")
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').should("be.visible")
    cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="5"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[aria-colindex="7"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should("be.visible")
    cy.get('[aria-colindex="8"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should("be.visible")
    cy.get('[data-id="22"] > [data-field="fname"] > .MuiDataGrid-cellContent').should('contain', 'Merima')
  })
  it('DP-5 Add "blagajnik" in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(3) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(3) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(3) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(3) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/treasurer/add')
    cy.get('h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#lname').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#jmbg').should("be.visible")
    cy.get('#birthPlace').should("be.visible")
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').should("be.visible")
    cy.get(':nth-child(7) > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Merima")
    cy.get('#lname').type("Test Dva")
    cy.get('#fatherName').type("Sanel")
    cy.get('#jmbg').type("9999999999999999")
    cy.get('#birthPlace').type("Peking")
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('15021984')
    cy.get(':nth-child(7) > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(3)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/treasurers')
    cy.get('[data-id="9"] > [data-field="fname"] > .MuiDataGrid-cellContent').should('contain', 'Merima')
  })
  it('DP-6 Add "domaćinstvo" in module "Početna" on Dzemat MGMT webpage', () => {
    cy.get(':nth-child(4) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(4) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(4) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(4) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/households/add')
    cy.get('h1').should("be.visible")
    cy.get('#address').should("be.visible")
    cy.get('#phoneHome').should("be.visible")
    cy.get('#phoneMobile').should("be.visible")
    cy.get('#jamaat').should("be.visible")
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#email').should("be.visible")
    cy.get(':nth-child(2) > .MuiFormControlLabel-root').should("be.visible")
    cy.get(':nth-child(3) > .MuiFormControlLabel-root').should("be.visible")
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#address').type("Terazije 11")
    cy.get('#phoneHome').type("033 333 333")
    cy.get('#phoneMobile').type("062 222 222")
    cy.get('#jamaat').click()
    cy.get('[data-value="6"]').click()
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('01012025')
    cy.get('#email').type("merima_hrapovic@hotmail.com")
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').type("Domaćinstvo broji tri člana.")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()

  })
  it('DP-7 Add "mezarje" in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(5) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(5) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(5) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(5) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/cemeteries/add')
    cy.get('h1').should("be.visible")
    cy.get('#name').should("be.visible")
    cy.get('.MuiButtonBase-root').should("be.visible")
    cy.get('#name').type("Test 1")
    cy.get('.MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(6)').click()
    cy.get('.MuiDataGrid-row--lastVisible > [data-field="name"] > .MuiDataGrid-cellContent').should('contain', "Test 1")
  })
  it('DP-8 Add new user in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(6) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(6) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(6) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(6) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/users/add')
    cy.get('.page-section-main-content > :nth-child(1)').should("be.visible")
    cy.get('#email').should("be.visible")
    cy.get('#username').should("be.visible")
    cy.get('.MuiFormControlLabel-root').should("be.visible")
    cy.get('.MuiFormControlLabel-root').should("be.visible")
    cy.get('.page-section-main-content > :nth-child(3)').should("be.visible")
    cy.get('#email').type("merima_hrapovic@hotmail.com")
    cy.get('#username').type("Merima Test")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(11)').click()
    cy.get('[data-id="18"] > [data-field="username"] > .MuiDataGrid-cellContent').should('contain', "merima.test")
  })
  it('DP-9 Add "novorođenče" in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(7) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(7) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(7) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(7) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/borns/add')
    cy.get('h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#lname').should("be.visible")
    cy.get('#education').should("be.visible")
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#birthPlace').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#motherName').should("be.visible")
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#imam').should("be.visible")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Merima")
    cy.get('#lname').type("Baby")
    cy.get('#education').click()
    cy.get('[data-value="Žensko"]').click()
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('29111994')
    cy.get('#birthPlace').type("Pljevlja")
    cy.get('#fatherName').type("Test F")
    cy.get('#motherName').type("Test M")
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('01012025')
    cy.get('#imam').click()
    cy.get('[data-value="22"]').click()
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(8)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/borns')
    cy.get('[data-id="5"] > [data-field="fname"] > .MuiDataGrid-cellContent').should('contain', "Merima")
  })
  it('DP-10 Add "umrlog" in module "Početna" on Džemat MGMT dev env', () => {
    cy.get(':nth-child(8) > .cta-content > .cta-title').should("be.visible")
    cy.get(':nth-child(8) > .cta-content > .cta-description').should("be.visible")
    cy.get(':nth-child(8) > .cta-content > .mdc-button > .mdc-button__ripple').should("be.visible")
    cy.get(':nth-child(8) > .cta-content > .mdc-button > .mdc-button__label').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/deaths/add')
    cy.get('h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#education').should("be.visible")
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#birthPlace').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#motherName').should("be.visible")
    cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#deathCause').should("be.visible")
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#funeralPlace').should("be.visible")
    cy.get('#imam').should("be.visible")
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Salko")
    cy.get('#lname').type("Dinamitaš")
    cy.get('#education').click()
    cy.get('[data-value="Ostalo"]').click()
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('01012000')
    cy.get('#birthPlace').type("Živinice")
    cy.get('#fatherName').type("Šaćir")
    cy.get('#motherName').type("Fahreta")
    cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('13022024')
    cy.get('#deathCause').type("Srčani udar")
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('16022024')
    cy.get('#funeralPlace').click()
    cy.get('[data-value="Dobrinja"]').click()
    cy.get('#imam').click()
    cy.get('[data-value="2"]').click()
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(9)').click()
    cy.get('[data-id="8"] > [data-field="fname"] > .MuiDataGrid-cellContent').should('contain', 'Salko')
  })
  it('DP-11 Add "mualima" in module "Mekteb" on Džemat MGMT dev env', () => {
    cy.get('.navbar-list > :nth-child(10)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/maktabs')
    cy.get('.cta-content').should("be.visible")
    cy.get('.cta-title').should("be.visible")
    cy.get('.cta-description').should("be.visible")
    cy.get('.mdc-button__ripple').should("be.visible")
    cy.get('#jamaat').should("be.visible")
    cy.get(':nth-child(2) > h1').should("be.visible")
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get(':nth-child(2) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders').should("be.visible")
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/maktabs/5/addmualim')
    cy.get('.modal-header > h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#lname').should("be.visible")
    cy.get('#jmbg').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#motherName').should("be.visible")
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#phone').should("be.visible")
    cy.get('#email').should("be.visible")
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Haso")
    cy.get('#lname').type("Murat")
    cy.get('#jmbg').type("1212121212121212")
    cy.get('#fatherName').type("Musa")
    cy.get('#motherName').type("Silvana")
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('13041994')
    cy.get('#phone').type("062888888")
    cy.get('#email').type("hasodoktor@gmail.com")
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('19062023')
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').click()
  })
  it('DP-12 Add "polaznik" in module "Mekteb" on Džemat MGMT dev env', () => {
    cy.get('.navbar-list > :nth-child(10)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/maktabs')
    cy.get('.cta-content').should("be.visible")
    cy.get('.cta-title').should("be.visible")
    cy.get('.cta-description').should("be.visible")
    cy.get('.mdc-button__ripple').should("be.visible")
    cy.get('#jamaat').should("be.visible")
    cy.get(':nth-child(2) > h1').should("be.visible")
    cy.get('.cta-content').should("be.visible")
    cy.get('.cta-title').should("be.visible")
    cy.get('.cta-description').should("be.visible")
    cy.get('.mdc-button__ripple').should("be.visible")
    cy.get('#jamaat').should("be.visible")
    cy.get(':nth-child(2) > h1').should("be.visible")
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('.page-section-main-content > :nth-child(2) > :nth-child(2)').should("be.visible")
    cy.get(':nth-child(3) > h1').should("be.visible")
    cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get(':nth-child(3) > .MuiGrid-container > .css-15j76c0 > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-columnHeaders').should("be.visible")
    cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/maktabs/5/addstudent')
    cy.get('.modal-header > h1').should("be.visible")
    cy.get('#fname').should("be.visible")
    cy.get('#lname').should("be.visible")
    cy.get('#jmbg').should("be.visible")
    cy.get('#fatherName').should("be.visible")
    cy.get('#motherName').should("be.visible")
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('#phone').should("be.visible")
    cy.get('#email').should("be.visible")
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').should("be.visible")
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').should("be.visible")
    cy.get('#fname').type("Mišo")
    cy.get('#lname').type("Mišonja")
    cy.get('#jmbg').type("9999999999999999")
    cy.get('#fatherName').type("Miško")
    cy.get('#motherName').type("Miška")
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('23092010')
    cy.get('#phone').type("033 555 555")
    cy.get('#email').type("misko_miskonja@hotmail.com")
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('16022015')
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').click()
  })
  it('DP-13 Verify that admin user can logout from the Dzemat MGMT webpage', () => {
    cy.get(':nth-child(12)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/login')
    cy.get('h1').should("be.visible")
    cy.get('#usernameOrEmail').should("be.visible")
    cy.get(':nth-child(2) > .MuiInputBase-root').should("be.visible")
    cy.get(':nth-child(3) > .MuiButtonBase-root').should("be.visible")
    cy.get('a').should("be.visible")
  })
})
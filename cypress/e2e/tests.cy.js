import { faker } from '@faker-js/faker';
import loginPage from '../page_objects/loginPage'
import jamaatPage from '../page_objects/jamaatPage'
import homePage from '../page_objects/homePage'
import imamsPage from '../page_objects/imamsPage'
import treasurersPage from '../page_objects/treasurersPage';
import householdsPage from '../page_objects/householdsPage';
import cemeteriesPage from '../page_objects/cemeteriesPage';
import usersPage from '../page_objects/usersPage';
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
    homePage.logoImg().should("be.visible")
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/home')
  })

  it('DP-2 Verify the content of the Dzemat MGMT homepage', () => {
    homePage.logoImg().should("be.visible")
    homePage.homeTxt().should("be.visible")
    homePage.imamsTxt().should("be.visible")
    homePage.treasurersTxt().should("be.visible")
    homePage.jamaatsTxt().should("be.visible")
    homePage.householdsTxt().should("be.visible")
    homePage.cemeteriesTxt().should("be.visible")
    homePage.weddingsTxt().should("be.visible")
    homePage.bornsTxt().should("be.visible")
    homePage.deathsTxt().should("be.visible")
    homePage.maktabsTxt().should("be.visible")
    homePage.usersTxt().should("be.visible")
    homePage.logoutTxt().should("be.visible")
    homePage.addJamaatInp().should("be.visible")
    homePage.addImamInp().should("be.visible")
    homePage.addTreasurerInp().should("be.visible")
    homePage.addHouseholdInp().should("be.visible")
    homePage.addCemeteryInp().should("be.visible")
    homePage.addUserInp().should("be.visible")
    homePage.addBornInp().should("be.visible")
    homePage.addDeathInp().should("be.visible")
    homePage.addMaktabStudentInp().should("be.visible")
    homePage.collapseWrapperImg().should("be.visible")
    homePage.copyrightTxt().should("be.visible")
  })
  it('DP-3 Add "džemat" in module "Početna" on Džemat MGMT dev env', () => {
    const randomCity = faker.location.city() + " " + faker.location.zipCode()
    homePage.jamaatTitTxt().should("be.visible")
    homePage.jamaatDesTxt().should("be.visible")
    homePage.jamaatBtn().should("be.visible")
    homePage.jamaatBtn().click()
    homePage.jamaatsTitTxt().should("be.visible")
    homePage.jamaatInp().should("be.visible")
    homePage.savejamaatBtn().should("be.visible")
    homePage.jamaatInp().type(randomCity)
    homePage.savejamaatBtn().click()
    homePage.jamaatsTxt().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/jamaats')
    jamaatPage.addjamaatInp().should("be.visible")
    jamaatPage.jamaatTitTxt().should("be.visible")
    jamaatPage.jamaatDesTxt().should("be.visible")
    jamaatPage.jamaatBtn().should("be.visible")
    jamaatPage.searchInp().should("be.visible")
    jamaatPage.searchImg().should("be.visible")
    jamaatPage.idHeaderTxt().should("be.visible")
    jamaatPage.jamaatHeaderTxt().should("be.visible")
    jamaatPage.changeHeaderTxt().should("be.visible")
    jamaatPage.searchInp().type(randomCity)
    jamaatPage.searchImg().click()
    jamaatPage.jamaatNameInp().contains(randomCity)
  })
  it('DP-4 Add "imam" in module "Početna" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomMiddleName = faker.person.middleName()
    const randomCity = faker.location.city()
    const randomID = faker.finance.accountNumber()
    homePage.imamTitTxt().should("be.visible")
    homePage.imamDesTxt().should("be.visible")
    homePage.imamBtn().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/imams/add')
    imamsPage.imamsTitTxt().should("be.visible")
    imamsPage.imamNameInp().should("be.visible")
    imamsPage.imamSurnameInp().should("be.visible")
    imamsPage.imamMiddleNameInp().should("be.visible")
    imamsPage.imamJmbgInp().should("be.visible")
    imamsPage.imamBirthDateInp().should("be.visible")
    imamsPage.imamBirthPlaceInp().should("be.visible")
    imamsPage.imamJamaatInp().should("be.visible")
    imamsPage.imamEduInp ().should("be.visible")
    imamsPage.imamSaveBtn().should("be.visible")
    imamsPage.imamNameInp().type(randomName)
    imamsPage.imamSurnameInp().type(randomLastName)
    imamsPage.imamMiddleNameInp().type(randomMiddleName)
    imamsPage.imamJmbgInp().type(randomID)
    imamsPage.imamBirthDateInp().type('12121992')
    imamsPage.imamBirthPlaceInp().type(randomCity)
    imamsPage.imamEduInp ().click()
    imamsPage.imamEduSSSInp().click()
    imamsPage.imamSaveBtn().click()
    homePage.imamsTxt().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/imams')
    imamsPage.addImamInp().should("be.visible")
    imamsPage.searchInp().should("be.visible")
    imamsPage.searchImg().should("be.visible")
    imamsPage.changeHeaderTxt().should("be.visible")
    imamsPage.idHeaderTxt().should("be.visible")
    imamsPage.nameHeaderTxt().should("be.visible")
    imamsPage.surnameHeaderTxt().should("be.visible")
    imamsPage.jmbgHeaderTxt().should("be.visible")
    imamsPage.middleNameHeaderTxt().should("be.visible")
    imamsPage.birthPlaceHeaderTxt().should("be.visible")
    imamsPage.birthDateHeaderTxt().should("be.visible")
    imamsPage.searchInp().type(randomName)
    imamsPage.searchImg().click()
    cy.wait(10000)
    //u ovom testu mi u tabeli ne izbacuje traženi podatak, samo prikaže praznu tabelu
  })
  it('DP-5 Add "blagajnik" in module "Početna" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomMiddleName = faker.person.middleName()
    const randomID = faker.finance.accountNumber()
    const randomCity = faker.location.city() + " " + faker.location.zipCode()
    homePage.treasurerTitTxt().should("be.visible")
    homePage.treasurerDesTxt().should("be.visible")
    homePage.treasurerBtn().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/treasurer/add')
    treasurersPage.treasurersTitTxt().should("be.visible")
    treasurersPage.treasurerNameInp().should("be.visible")
    treasurersPage.treasurerSurnameInp().should("be.visible")
    treasurersPage.treasurerMiddleNameInp().should("be.visible")
    treasurersPage.treasurerJmbgInp().should("be.visible")
    treasurersPage.treasurerBirthPlaceInp().should("be.visible")
    treasurersPage.treasurerBirthDateInp().should("be.visible")
    treasurersPage.treasurerSaveBtn().should("be.visible")
    treasurersPage.treasurerNameInp().type(randomName)
    treasurersPage.treasurerSurnameInp().type(randomLastName)
    treasurersPage.treasurerMiddleNameInp().type(randomMiddleName)
    treasurersPage.treasurerJmbgInp().type(randomID)
    treasurersPage.treasurerBirthPlaceInp().type(randomCity)
    treasurersPage.treasurerBirthDateInp().type('15021984')
    treasurersPage.treasurerSaveBtn().click()
    homePage.treasurersTxt().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/treasurers')
    treasurersPage.searchInp().type(randomName)
    treasurersPage.searchImg().click()
    treasurersPage.treasurerFieldName().should('contain', randomName)
  })
  it('DP-6 Add "domaćinstvo" in module "Početna" on Dzemat MGMT webpage', () => {
    const randomAddress = faker.location.streetAddress()
    const randomPhone = faker.phone.number()
    const randomMobPhone = faker.phone.imei()
    const randomEmail = faker.internet.email()
    const randomNote = faker.lorem.sentence()
    homePage.householdTitTxt().should("be.visible")
    homePage.householdDesTxt().should("be.visible")
    homePage.householdBtn().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/households/add')
    householdsPage.householdsTitTxt().should("be.visible")
    householdsPage.householdAddressInp().should("be.visible")
    householdsPage.householdPhoneInp().should("be.visible")
    householdsPage.householdMobInp().should("be.visible")
    householdsPage.householdDzeInp().should("be.visible")
    householdsPage.householdEntryDateInp().should("be.visible")
    householdsPage.householdEmailInp().should("be.visible")
    householdsPage.householdIncDataInp().should("be.visible")
    householdsPage.householdFeeInp().should("be.visible")
    householdsPage.householdNoteInp().should("be.visible")
    householdsPage.householdSaveBtn().should("be.visible")
    householdsPage.householdAddressInp().type(randomAddress)
    householdsPage.householdPhoneInp().type(randomPhone)
    householdsPage.householdMobInp().type(randomMobPhone)
    householdsPage.householdDzeInp().click()
    householdsPage.householdDzeVRInp().click()
    householdsPage.householdEntryDateInp().type('01012025')
    householdsPage.householdEmailInp().type(randomEmail)
    householdsPage.householdNoteInp().type(randomNote)
    householdsPage.householdSaveBtn().click()
    homePage.householdsTxt().click()
    // nisam sigurna zašto, ali poslije ovog klika na Domaćinstva na nav. bar, u cypressu me ne preusmjerava na generalnu stranicu Domaćinstva sa pregledom svih unosa/tabelom, nego me i dalje drži na specifičnom unosu koji sam napravila ranije. Provjeriti
   
  })
  it('DP-7 Add "mezarje" in module "Početna" on Džemat MGMT dev env', () => {
    const randomCemetery = faker.location.county()
    homePage.cemeteryTitTxt().should("be.visible")
    homePage.cemeteryDesTxt().should("be.visible")
    homePage.cemeteryBtn().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/cemeteries/add')
    cemeteriesPage.cemeteriesTitTxt().should("be.visible")
    cemeteriesPage.cemeteryNameInp().should("be.visible")
    cemeteriesPage.cemeterySaveBtn().should("be.visible")
    cemeteriesPage.cemeteryNameInp().type(randomCemetery)
    cemeteriesPage.cemeterySaveBtn().click()
    homePage.cemeteriesTxt().click()
    cemeteriesPage.searchInp().type(randomCemetery)
    cemeteriesPage.searchImg().click()
    cemeteriesPage.cemeteryFieldName().should('contain', randomCemetery)
  })
  it.only('DP-8 Add new user in module "Početna" on Džemat MGMT dev env', () => {
    const randomEmail = faker.internet.email()
    const randomFullName = faker.person.fullName()
    homePage.userTitTxt().should("be.visible")
    homePage.userDesTxt().should("be.visible")
    homePage.userBtn().click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/users/add')
    usersPage.usersTitTxt().should("be.visible")
    usersPage.userEmailInp().should("be.visible")
    usersPage.userNameInp().should("be.visible")
    usersPage.userActiveTxt().should("be.visible")
    usersPage.userSaveBtn().should("be.visible")
    usersPage.userRightsTxt().should("be.visible")
    usersPage.userEmailInp().type(randomEmail)
    usersPage.userNameInp().type(randomFullName)
    usersPage.userSaveBtn().click()
    homePage.usersTxt().click()
    usersPage.searchInp().type(randomEmail)
    usersPage.searchImg().click()
    //u ovom testu ne filtrira specifičan mail kada kliknem search button, već prikazuje tabelu sa svim unosima
  })
  it('DP-9 Add "novorođenče" in module "Početna" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomSex = faker.person.sex()
    const randomCity = faker.location.city()
    const randomMiddleName = faker.person.middleName()
    const randomImam = faker.person.fullName()
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
    cy.get('#fname').type(randomName)
    cy.get('#lname').type(randomLastName)
    cy.get('#education').click()
    cy.get('[data-value="Žensko"]').click()
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('29111994')
    cy.get('#birthPlace').type(randomCity)
    cy.get('#fatherName').type(randomMiddleName)
    cy.get('#motherName').type("Test")
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('01012025')
    cy.get('#imam').click()
    cy.get('[data-value="22"]').click()
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(8)').click()
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/borns')
    cy.get('.MuiInputBase-root').type(randomName)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('[data-field="fname"] > .MuiDataGrid-cellContent').should('contain', randomName)
  })
  it('DP-10 Add "umrlog" in module "Početna" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomCity = faker.location.city()
    const randomMiddleName = faker.person.middleName()
    const randomCause = faker.lorem.paragraph()
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
    cy.get('#fname').type(randomName)
    cy.get('#lname').type(randomLastName)
    cy.get('#education').click()
    cy.get('[data-value="Ostalo"]').click()
    cy.get(':nth-child(1) > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('01012000')
    cy.get('#birthPlace').type(randomCity)
    cy.get('#fatherName').type(randomMiddleName)
    cy.get('#motherName').type("Test")
    cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('13022024')
    cy.get('#deathCause').type(randomCause)
    cy.get('.css-1iuj5ih > :nth-child(4) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('16022024')
    cy.get('#funeralPlace').click()
    cy.get('[data-value="Dobrinja"]').click()
    cy.get('#imam').click()
    cy.get('[data-value="2"]').click()
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(9)').click()
    cy.get('.MuiInputBase-root').type(randomLastName)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('[data-field="lname"] > .MuiDataGrid-cellContent').should('contain', randomLastName)
  })
  it('DP-11 Add "mualima" in module "Mekteb" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomID = faker.finance.accountNumber()
    const randomMiddleName = faker.person.middleName()
    const randomMotherName = faker.person.fullName()
    const randomMobPhone = faker.phone.imei()
    const randomEmail = faker.internet.email()
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
    cy.get('#fname').type(randomName)
    cy.get('#lname').type(randomLastName)
    cy.get('#jmbg').type(randomID)
    cy.get('#fatherName').type(randomMiddleName)
    cy.get('#motherName').type(randomMotherName)
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('13041994')
    cy.get('#phone').type(randomID)
    cy.get('#email').type(randomEmail)
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('19062023')
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').click()
    //ovdje nisam sigurna kako izaci iz ove pod-forme Mektebski mualima da bih se vratila na modul Mekteb na sidebar
  })
  it('DP-12 Add "polaznik" in module "Mekteb" on Džemat MGMT dev env', () => {
    const randomName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomID = faker.finance.accountNumber()
    const randomMiddleName = faker.person.middleName()
    const randomMotherName = faker.person.fullName()
    const randomMobPhone = faker.phone.imei()
    const randomEmail = faker.internet.email()
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
    cy.get('#fname').type(randomName)
    cy.get('#lname').type(randomLastName)
    cy.get('#jmbg').type(randomID)
    cy.get('#fatherName').type(randomMiddleName)
    cy.get('#motherName').type(randomMotherName)
    cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('23092010')
    cy.get('#phone').type(randomID)
    cy.get('#email').type(randomEmail)
    cy.get(':nth-child(9) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root').type('16022015')
    cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root').click()
    //ista stvar kao i prethodni case, nisam sigurna kako izaci iz ove pod-forme Mektebski polaznik da bih se vratila na modul Mekteb na sidebar
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
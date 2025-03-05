describe('Dzemat management app', () => {
  beforeEach(() => {
    cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')
    cy.get('h1').should("be.visible")
    cy.get('#usernameOrEmail').should("be.visible")
    cy.get('#password').should("be.visible")
    cy.get(':nth-child(3) > .MuiButtonBase-root').should("be.visible")
    cy.get('a').should("be.visible")
    cy.get('#usernameOrEmail').type("admin")
    cy.get('#password').type("admin")
    cy.get(':nth-child(3) > .MuiButtonBase-root').click()
  })
  it('DP-1 Verify that admin user can login to Dzemat MGMT webpage', () => {
    cy.get('.logo-img').should("be.visible")
    cy.url().should('eq', 'https://dzematmgmt-dev.uradinesto.ba/admin/home')
  })

  it('DP-2 Verify the content of the Dzemat MGMT homepage', () => {
    
  })
})
class loginPage {

    visit() {
        return cy.visit('/')
    }

    titleTxt() {
        return cy.get('h1')
    }

    usernameInp() {
        return cy.get('#usernameOrEmail')
    }

    passwordInp() {
        return cy.get('#password')
    }

    loginBtn() {
        return cy.get(':nth-child(3) > .MuiButtonBase-root')
    }

    forgottenpassLink() {
        return cy.get('a')
    }

    typeInUserCredentials() {
        return cy.fixture("example").then((data) => {
            this.usernameInp().type(data.username)
            this.passwordInp().type(data.password)
        })
    }

}
module.exports = new loginPage();
import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'

const loginPage = new LoginPage()
describe.only('Orange HRM Tests', () => {

const selectorsList = {
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']", 
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-mm-dd']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
  genericComboBox: ".oxd-select-text--after",
}

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    cy.location("pathname").should("equal", '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get("[name='firstName']").clear().type("Teste First Name")
    cy.get("[name='middleName']").clear().type("Teste Middle Name")
    cy.get("[name='lastName']").clear().type("Teste Last Name")
    cy.get(selectorsList.genericField).eq(4).clear().type("Id Test")
    cy.get(selectorsList.genericField).eq(5).clear().type("Other Id Test")
    cy.get(selectorsList.genericField).eq(6).clear().type("Drivers License Number Test")
    cy.get(selectorsList.dateField).should('exist').eq(0).clear().type("15-10-2004")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type("08-11-2015")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(':nth-child(36) > span').click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
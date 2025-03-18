import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/dashboardPage.js'
import MenuPage from '../../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
describe.only('Orange HRM Tests', () => {

const selectorsList = {
  firstNameField: "[name='firstName']", 
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
  genericComboBox: ".oxd-select-text--after",
}

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get("[name='firstName']").clear().type("Teste First Name")
    cy.get("[name='middleName']").clear().type("Teste Middle Name")
    cy.get("[name='lastName']").clear().type("Teste Last Name")
    cy.get(selectorsList.genericField).eq(3).clear().type("Id Test")
    cy.get(selectorsList.genericField).eq(4).clear().type("Other Id Test")
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivers License Number Test")
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
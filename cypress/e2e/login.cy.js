import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe.only('Login Orange HRM Tests', () => {
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkWrongCredentialAlert()
  })

  it('Login - Success', () => {
    cy.visit('/auth/login')
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })
})
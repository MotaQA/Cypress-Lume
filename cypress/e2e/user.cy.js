import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/dashboardPage.js'
import MenuPage from '../../pages/menuPage.js'
import MyInfoPage from '../../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
describe.only('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('Employee Id', 'Other Id', 'Drivers License', '2025-09-11')
    myInfoPage.fillStatus("08-11-2015")
    myInfoPage.saveForm()
  })
})
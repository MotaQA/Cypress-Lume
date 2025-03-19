class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']", 
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text--after",
            canadianNacionality: ":nth-child(36) > span"
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get("[name='firstName']").clear().type(firstName)
        cy.get("[name='middleName']").clear().type(middleName)
        cy.get("[name='lastName']").clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expirydate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).should('exist').eq(0).clear().type(expirydate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(birthdate) {
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthdate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().canadianNacionality).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        //cy.get('body').should('contain', 'Successfully Updated')
        //cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage
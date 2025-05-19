import {userNameTxtBox,passwordTxtBox,loginBtn} from "../pageObjects/loginPage.json"
const {url,password,username} = Cypress.env();

const loginToApplication = () => {        
        cy.visit(url);
        cy.get(userNameTxtBox).type(username);
        cy.get(passwordTxtBox).type(password);
        cy.get(loginBtn).click();
}

export{
    loginToApplication,
}
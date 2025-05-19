import {loginToApplication} from "../../utilities/commonUtilities"

describe("LoginPage",()=>{
    it("login with valid credentials",()=>{
        loginToApplication()
        //.wait(5000);        
        console.log("after login");
        cy.log("afterlogin");
        cy.get("a[title='Opportunities']").wait(5000).click();
      //})
     // cy.readFile('LearnCypress\cypress\testData\doc.json').then((res)=>{
        //cy.log(res)
       // console.log(res)
      //})
      cy.writeFile('LearnCypress\cypress\testData\doc1.json','Name:Hello Name');
    })
})
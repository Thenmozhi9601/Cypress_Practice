const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:60000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    env:{
      url:"https://login.salesforce.com/",
      username:"s.thenmozhi9601@gmail.com",
      password:"Nakshith@01"
    }
  },
});

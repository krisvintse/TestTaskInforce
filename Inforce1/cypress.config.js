const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  chromeWebSecurity: false,


  defaultCommandTimeout: 10000, 

  requestTimeout: 10000, 
});



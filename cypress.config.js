const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportHeight: 2000,
    viewportWidth: 2000,
    specPattern:'**/*.spec.js'
  },
  env: {
    "url":"http:/www.abc.com"
  }
});

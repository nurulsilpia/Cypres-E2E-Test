const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '7xonb3',
    e2e: {
        baseUrl: 'https://petstore.swagger.io/v2',
        specPattern: "cypress/support/e2e",
        supportFile: false
    },
    env: {
        username: "Piarus",
        password: "12345"
    }
})
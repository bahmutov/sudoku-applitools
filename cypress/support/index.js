// set up Applitools following
// https://www.npmjs.com/package/@applitools/eyes-cypress
import '@applitools/eyes-cypress/commands'
require('cypress-react-unit-test/support')

beforeEach(() => {
  cy.eyesOpen({
    appName: 'Sudoku',
    browser: {
      width: cy.state('viewportWidth'),
      height: cy.state('viewportHeight'),
    },
  })
})

afterEach(() => {
  cy.eyesClose()
})

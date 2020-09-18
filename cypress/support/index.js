/// <reference types="cypress" />
// set up Applitools following
// https://www.npmjs.com/package/@applitools/eyes-cypress
import '@applitools/eyes-cypress/commands'
require('cypress-react-unit-test/support')

if (Cypress.env('APPLITOOLS_SETUP')) {
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
} else {
  // do nothing for visual test commands
  Cypress.Commands.overwrite('eyesCheckWindow', (eyesCheckWindow, name) => {
    cy.log(`👀 skipping screenshot **${name}**`)
  })
}

/// <reference types="cypress" />
// set up Applitools following
// https://www.npmjs.com/package/@applitools/eyes-cypress
import '@applitools/eyes-cypress/commands'
require('cypress-react-unit-test/support')

if (Cypress.env('APPLITOOLS_SETUP')) {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Sudoku',
      batchName: 'Sudoku',
      browser: [
        { width: 800, height: 600, name: 'chrome' },
        { width: 1024, height: 768, name: 'chrome' },
        { width: 1920, height: 1080, name: 'chrome' },
        { width: 800, height: 600, name: 'firefox' },
        { deviceName: 'iPhone X' },
        { deviceName: 'iPad' },
      ],
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })
} else {
  // do nothing for visual test commands
  Cypress.Commands.overwrite(
    'eyesCheckWindow',
    (eyesCheckWindow, options = {}) => {
      if (options.tag) {
        cy.log(`👀 skipping screenshot **${options.tag}**`)
      } else {
        cy.log(`👀 skipping screenshot`)
      }
    },
  )
}

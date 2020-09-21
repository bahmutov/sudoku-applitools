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
        // 3 main resolutions in our Sudoku app
        { width: 1024, height: 768, name: 'chrome' }, // desktop
        { width: 600, height: 700, name: 'chrome' }, // tablet
        { width: 300, height: 600, name: 'firefox' }, // mobile

        // or list a whole bunch!
        // { width: 1024, height: 768, name: 'chrome' },
        // { width: 800, height: 600, name: 'chrome' },
        // { width: 1920, height: 1080, name: 'chrome' },
        // { width: 800, height: 600, name: 'firefox' },
        // { deviceName: 'iPhone X' },
        // { deviceName: 'iPad' },
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

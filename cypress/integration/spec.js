/// <reference types="cypress" />

describe('Sudoku', () => {
  it('works', () => {
    cy.visit('/')
    // on easy setting there are 45 filled cells at the start
    cy.get('.game__cell--filled').should('have.length', 45)
    cy.contains('.status__time', '00:00')
    cy.contains('.status__difficulty-select', 'Easy')

    // how to ensure the random numbers on the board
    // are not failing the visual comparison?
    // https://github.com/bahmutov/sudoku-applitools/issues/3
    // cy.eyesCheckWindow({ tag: 'desktop' })

    cy.viewport(600, 800)
    cy.get('.game__cell--filled').should('have.length', 45)

    // how to vary the resolution of individual screenshots?
    // cy.eyesCheckWindow({ tag: 'tablet' })

    cy.viewport(300, 600)
    cy.get('.game__cell--filled').should('have.length', 45)
    // cy.eyesCheckWindow({ tag: 'mobile' })
  })
})

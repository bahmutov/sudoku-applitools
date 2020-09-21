/// <reference types="cypress" />

describe('Sudoku', () => {
  it('works', () => {
    cy.visit('/')
    // on easy setting there are 45 filled cells at the start
    cy.get('.game__cell--filled').should('have.length', 45)
    cy.contains('.status__time', '00:00')
    cy.contains('.status__difficulty-select', 'Easy')

    // will fail due to random board
    // cy.eyesCheckWindow({ tag: 'App' })

    // ignore the contents of the board's cells
    const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    cy.eyesCheckWindow({
      tag: 'App',
      ignore: oneToNine.flatMap((row) =>
        oneToNine.map((cell) => ({
          selector: `tr.game__row:nth-child(${row}) > td:nth-child(${cell})`,
        })),
      ),
    })
  })
})

/// <reference types="cypress" />
import React from 'react'
import { App } from './App'
import { mount } from 'cypress-react-unit-test'
import * as UniqueSudoku from './solver/UniqueSudoku'
import initArray from '../cypress/fixtures/init-array.json'
import solvedArray from '../cypress/fixtures/solved-array.json'

describe('App', () => {
  it('mocks board creation', () => {
    cy.stub(UniqueSudoku, 'getUniqueSudoku').returns([
      initArray,
      solvedArray,
    ])

    // cy.clock()
    mount(<App />)

    // functional assertion
    cy.get('.game__cell--filled').should('have.length', 45)

    // visual assertion
    cy.eyesCheckWindow({tag: 'solved board'})
  })

  it('plays one move', () => {
    // stub method import using JSON objects
    cy.stub(UniqueSudoku, 'getUniqueSudoku').returns([initArray, solvedArray])
    // cy.clock()
    mount(<App />)

    cy.get('.game__cell').first().click()

    // functional assertion
    cy.contains('.status__number', '6').click()
    cy.get('.game__cell')
      .first()
      .should('have.class', 'game__cell--highlightselected')

    // visual assertion
    cy.eyesCheckWindow({tag: 'one move'})
  })

  it('plays to win', () => {
    // start with all but the first cell filled with solved array
    const almostSolved = [...solvedArray]
    // by setting entry to "0" we effectively clear the cell
    almostSolved[0] = '0'
    cy.stub(UniqueSudoku, 'getUniqueSudoku')
      .returns([almostSolved, solvedArray])
      .as('getUniqueSudoku')
    // cy.clock()
    mount(<App />)

    // visual assertion
    cy.eyesCheckWindow({ tag: ' game is almost solved' })

    // win the game
    cy.get('.game__cell').first().click()
    // use the known number to fill the first cell
    cy.contains('.status__number', solvedArray[0]).click()

    // functional assertion
    cy.get('.overlay__text').should('be.visible')
    cy.get('@getUniqueSudoku').should('have.been.calledOnce')

    // visual assertion
    cy.eyesCheckWindow({ tag: '2 game is solved' })

    // clicking the overlay starts the new game
    cy.get('.overlay__text').click()

    // functional assertion
    cy.get('.overlay').should('not.be.visible')
    cy.get('@getUniqueSudoku').should('have.been.calledTwice')

    // visual assertion
    cy.eyesCheckWindow({ tag: 'start game after solved game' })
  })
})

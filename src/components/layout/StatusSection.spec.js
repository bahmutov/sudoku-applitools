/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { StatusSection } from './StatusSection'
import '../../App.css'

describe('StatusSection', () => {
  it('renders status', () => {
    mount(
      <div className="innercontainer">
        <StatusSection />
      </div>,
    )
    // let's wait for everything to render
    cy.wait(500)

    // functional assertion
    cy.get('.status__action-mistakes-mode')
      .find('input[type=checkbox]')
      .should('not.be.checked')

    // visual assertion
    cy.eyesCheckWindow({ tag: 'mistakes mode should not be checked' })

    cy.log('**turn mistakes mode on**')
    cy.get('.status__action-mistakes-mode').click()

    // functional assertion
    cy.get('.status__action-mistakes-mode')
      .find('input[type=checkbox]')
      .should('be.checked')
    cy.get('.status__action-fast-mode')
      .find('input[type=checkbox]')
      .should('not.be.checked')

    cy.log('**turn fast mode on**')
    cy.get('.status__action-fast-mode').click()

    // functional assertion
    cy.get('.status__action-fast-mode')
      .find('input[type=checkbox]')
      .should('be.checked')

    // visual assertion
    cy.eyesCheckWindow({ tag: 'both modes on' })
  })
})

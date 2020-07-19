// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Cypress first test', () => {
  beforeEach(() => {
    // https://localhost:3000
    cy.visit('/')
  })

  it('shows 2 inputs', function () {
    cy.get('input').should('have.length', 2)
  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
})

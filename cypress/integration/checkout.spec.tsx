/// <reference types="cypress" />

describe("Checkout Page", () => {
  before(() => {
    cy.visit('/');
    cy.get('button').first().click()
    cy.visit('/check-out')
  })

  it("Should render checkout page with product", () => {
    cy.url().should('eq', 'http://localhost:3000/check-out')
  })

  it("Should redirect to confirmation page after purchase", () => {
    cy.get('a').last().click()
    cy.url().should('eq', 'http://localhost:3000/confirmation')
  })
});

/// <reference types="cypress" />

describe("Checkout Page", () => {
  it("Should render checkout page with product", () => {
    cy.visit('/');
    cy.get('button').first().click()
    cy.visit('/check-out')
    cy.url().should('eq', 'http://localhost:3000/check-out')
  })

  it("Should redirect to confirmation page after purchase", () => {
    cy.visit('/');
    cy.get('button').first().click()
    cy.visit('/check-out')
    cy.url().should('eq', 'http://localhost:3000/check-out')

    cy.get('a').last().click()
  })
});

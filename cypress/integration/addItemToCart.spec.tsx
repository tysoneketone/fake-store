/// <reference types="cypress" />

describe("Add items to cart", () => {
  before(() => {
    cy.visit('/');
  });

  it("Should render home page", () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it("Should add first product listing to Cart", () => {
    cy.get('button').first().click()
  })
});

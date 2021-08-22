/// <reference types="cypress" />

describe("item to cart", () => {
  before(() => {
    cy.visit('/');
  });

  it("Should successfully render home page", () => {
    cy.url().should("eq", "http://localhost:3000/");
  })
})
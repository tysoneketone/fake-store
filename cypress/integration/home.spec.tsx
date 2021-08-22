/// <reference types="cypress" />

describe("Render Home Page", () => {
  it("Should successfully render home page", () => {
    cy.visit('/');
    cy.url().should("eq", "http://localhost:3000/");
  })
})
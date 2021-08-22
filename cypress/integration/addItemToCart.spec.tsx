/// <reference types="cypress" />

describe("Add Item to Cart", () => {
  it("Should successfully add product to Cart", () => {
    cy.visit('/');
    cy.get('button').first()
      .click()
      // eslint-disable-next-line jest/valid-expect
      .should(() => expect(localStorage.getItem('cartItems')).to.not.be.null
    )
  })
});

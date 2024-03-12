describe('Test your information page functionality', () => {
    it('Should test Your information page functionality', () => {
      cy.AddProducts('standard_user', 'secret_sauce', '[data-test="add-to-cart-sauce-labs-backpack"]', '[data-test="add-to-cart-sauce-labs-bike-light"]');
      cy.get('.shopping_cart_link').click();
      cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack');
      cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light');
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('test')
      cy.get('[data-test="lastName"]').type('test')
      cy.get('[data-test="postalCode"]').type('test')
      cy.get('[data-test="continue"]').click()
    })
})
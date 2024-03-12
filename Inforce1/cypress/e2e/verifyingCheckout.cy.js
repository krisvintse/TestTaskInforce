describe('Verifying the checkout', () => {
    it('Should verify the checkout information', () => {
      cy.AddProducts('standard_user', 'secret_sauce', '[data-test="add-to-cart-sauce-labs-backpack"]', '[data-test="add-to-cart-sauce-labs-bike-light"]');
      cy.get('.shopping_cart_link').click();
      cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack');
      cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light');
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('test')
      cy.get('[data-test="lastName"]').type('test')
      cy.get('[data-test="postalCode"]').type('test')
      cy.get('[data-test="continue"]').click()
      cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Backpack')
      cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
      cy.get('.summary_subtotal_label').should('contain', 'Item total')
      cy.get('.summary_tax_label').should('contain' , 'Tax')
    })
})

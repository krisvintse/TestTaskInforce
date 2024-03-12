describe('Test cart functionality', () => {
    it('Should add products to the cart', () => {
      cy.AddProducts('standard_user', 'secret_sauce', '[data-test="add-to-cart-sauce-labs-backpack"]', '[data-test="add-to-cart-sauce-labs-bike-light"]');
    })
})
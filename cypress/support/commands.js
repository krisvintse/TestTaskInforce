  Cypress.Commands.add('AddProducts', (username, password, product1, product2) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('contain', 'Products');
    cy.get(product1).click();
    cy.get(product2).click();
    cy.get('.shopping_cart_badge', { timeout: 10000 }).should('contain', '2');
});



  
  

  
  
  
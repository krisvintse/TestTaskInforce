describe('Test cart functionality', () => {
    it('Should load the site succesfully', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('.title').should('contain','Products')
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
      cy.get('.login_wrapper-inner').should('contain', 'Login')
  })
})
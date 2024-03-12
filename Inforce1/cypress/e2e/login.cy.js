describe('Test login functionality', () => {
  it('Should load the site succesfully', () => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Should login the user with valid data', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')
  })

  it('Doesnt login the user with invalid data', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user1")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service' )
  })

  it('Doesnt login the user with invalid password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce2")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service' )
  })

  it('Should login the locked_out_user with valid data', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.');

  })

  it('Login problem_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("problem_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')
  })

  it('Login performance_glitch_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("performance_glitch_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')
  })

  it('Login error_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("error_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')
  })

  it('Login visual_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("visual_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')
  })
})
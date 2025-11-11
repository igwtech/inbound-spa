describe('Authentication', () => {
  it('should log in and redirect to the home page', () => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('API Tokens').should('be.visible')
    cy.contains('Logout').should('be.visible')
  })

  it('should log out and redirect to the login page', () => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('Logout').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })
})

describe('API Token Management', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('API Tokens').click()
  })

  it('should display the API token management page', () => {
    cy.contains('h1', 'API Token Management')
  })

  it('should create and delete a token', () => {
    cy.contains('button', 'Create New Token').click()
    cy.contains('Token 3').should('be.visible')
    cy.contains('Token 3').parent().find('button').click()
    cy.contains('Token 3').should('not.exist')
  })
})

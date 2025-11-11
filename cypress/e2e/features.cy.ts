describe('Post Management', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('Posts').click()
  })

  it('should display the post management page', () => {
    cy.contains('h1', 'Posts')
  })

  it('should display a message when there are no posts', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('posts', '[]')
    })
    cy.reload()
    cy.contains('No posts found')
  })
})

describe('Client and Hub Management', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('Clients & Hubs').click()
  })

  it('should display the client and hub management page', () => {
    cy.contains('h1', 'Clients')
    cy.contains('h1', 'Hubs')
  })

  it('should display a message when there are no clients or hubs', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('clients', '[]')
      win.localStorage.setItem('hubs', '[]')
    })
    cy.reload()
    cy.contains('No clients found')
    cy.contains('No hubs found')
  })
})

describe('Webhook Configuration', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('Webhooks').click()
  })

  it('should display the webhook configuration page', () => {
    cy.contains('h1', 'Webhooks')
  })

  it('should display a message when there are no webhooks', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('webhooks', '[]')
    })
    cy.reload()
    cy.contains('No webhooks found')
  })
})

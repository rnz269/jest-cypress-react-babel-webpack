describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.findByText(/^1$/).click() // 1
    cy.findByText(/^\+$/).click() // +
    cy.findByText(/^2$/).click() // 2
    cy.findByText(/^=$/).click() // =
    cy.findByTestId(/total/).should('have.text', '3') // make assertion
  })
})

describe('authenticated calculator', () => {
  it('displays the username when logged in, does not display when logged out', () => {
    // create user in database
    cy.createUser().then(user => {
      // now, log in our user via a direct request
      cy.login(user)

      cy.visit('/')
      // assert that we should see username
      cy.findByTestId('username-display').should('have.text', user.username)
      // log out user
      cy.findByText(/logout/i).click()
      // assert that we should no longer see the username
      cy.findByTestId('username-display').should('not.exist', user.username)
    })
  })
})

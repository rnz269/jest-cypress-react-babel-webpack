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

/// <reference types="cypress" />


describe('Home Products Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })
    it('check products', () => {
        cy.get('.products-container > .m-card').should('have.length.greaterThan', 7)
    })
    it('Add Product', () => {
        cy.get('.products-container > .m-card').first().find('button').click()
        cy.get('.navbar-brand').click()
        cy.get('.d-cards-container > .d-card').should('have.length', 1)
        cy.get('.checkout').find('a').click()
    })
})
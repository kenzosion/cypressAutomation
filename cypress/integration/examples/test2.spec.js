/// <reference types="Cypress" />

describe('how to test another webpage',  () => {

    it('shows from landing to checkout page', () => {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
    

        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        //fixture

    })



})
/// <reference types="Cypress" />

describe ('Writing cypress test', () => {

    it('testing testing', () => {
        cy.visit('https://www.ef.co.uk/');
        cy.get('#omnidiv-tile-misc-st-loc > .tile-mosaic__item > .panel > .panel__default > .panel__title').click()
    })

})
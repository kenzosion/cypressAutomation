/// <reference types="Cypress" />

describe ('Writing cypress test', () => {

    it('testing testing', () => {
        cy.visit('https://www.ef.co.uk/');
        cy.get('#omnidiv-tile-misc-st-loc > .tile-mosaic__item > .panel > .panel__default > .panel__title').click();
        cy.get('.ef-header__menu-toggle > .ef-icon').click();
        cy.get('.item-content__wrapper').should('have.length', 5);
        cy.get('#omnidiv-product-site-menu-mobile > .ef-nav > .ef-nav__menu > :nth-child(2) > :nth-child(1)').click();
        cy.get('.-open.-with-sub-menu > .ef-nav__sub-menu > :nth-child(2) > .ef-nav__link').click();
        cy.get('.fat-footer__button > .ef-button').click();
        // cy.get('.item-content__wrapper').find

        
    })

})
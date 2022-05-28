/// <reference types="cypress" />

describe('Validate navigation to more info page', () => {

    before(() => {
        cy.visit("/")
        cy.acceptCookies()
    })
    
    it('Four steps of the buying proccess are displayed', () => {
        cy.clickOnLink("deine-vorteile/so-funktionierts")
        cy.url().should('include', 'so-funktionierts')
        cy.get('h3').then(($items) => {
            expect($items).to.contain("#1 Wähle Dein Wunschauto aus")
            expect($items).to.contain("#2 Finde Deine Finanzierung")
            expect($items).to.contain("#3 Zulassung – ohne Stress")
            expect($items).to.contain("#4 Lieferung vor Deine Haustür")
        })
    })
})


/// <reference types="cypress" />

describe('Search car by model and brand', () => {

    var brand = "Audi";
    var model = "A1";

    before(() => {
        cy.visit("/")
        cy.acceptCookies()
    })

    it('Cars list filtered by selected model and brand', () => {
        cy.selectBrand(brand)
        cy.selectModel(model)
        cy.landingSearch()
        cy.validateFilter(brand)
        cy.validateFilter(model)
    })
})

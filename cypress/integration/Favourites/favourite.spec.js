/// <reference types="cypress" />

    describe('Add new car to favourites and remove cars from favourites', () => {

        beforeEach(() => {
            cy.visit("/favoriten")
            cy.acceptCookies()
        })

        it('Adding new car to favourites', () => {
            cy.get("div").contains("Auto hinzufügen").click()
            cy.xpath("//div[@property='itemOffered']").first().find("svg").first().click()
            cy.get('a[href*="favoriten"]').first().invoke("text").should("eq", "1 Favoriten")
            cy.get('a[href*="favoriten"]').first().click({ force: true })
            cy.xpath("//div[@property='itemOffered']").should('have.length', 1)
            cy.xpath("//div[@property='itemOffered']").first().find("svg").first().click()
            cy.xpath("//div[@property='itemOffered']").should('have.length', 0)
        })
    })


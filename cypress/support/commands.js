Cypress.Commands.add("acceptCookies", () => {
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('#onetrust-accept-btn-handler').should('not.be.visible')
})

Cypress.Commands.add('selectBrand', (brand) => {
    cy.get('[data-testid="landing-make-selector"]').click();
    cy.get("li").contains(brand).click();
})

Cypress.Commands.add('selectModel', (model) => {
    cy.get('[data-testid="landing-model-selector"]').click();
    cy.get("li").contains(model).click();
})

Cypress.Commands.add("landingSearch", () => {
    cy.get('[data-testid="landing-search-button"]').click();
})

Cypress.Commands.add("validateFilter", (text) => {
    cy.xpath("//span[text()='" + text + "']").should('be.visible')
})

Cypress.Commands.add("clickOnLink", (text) => {
    cy.get('a[href*="'+text+'"]').click()
})

Cypress.Commands.add("firstOfferedItem", () => {
    return cy.xpath("//div[@property='itemOffered']").first()
})

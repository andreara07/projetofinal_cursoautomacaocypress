Cypress.Commands.add("buscaItem", () => {
    cy.get('[class="jss5"]').click().type("Biofresh").type("{ENTER}");
    cy.contains("Ração Biofresh Gatos Castrados Salmão", {timeout: 10000}).should("be.visible");
})

Cypress.Commands.add("adicaoItem", () => {
    cy.get('[href="/racao-biofresh-gatos-castrados-salmao-31004174/p"]').click();
    cy.get('[class="MuiChip-label"]').eq(1).click();
    cy.get('[class="styles__ButtonWrapper-sc-1nkubcs-0 dUwffV button-new"]').click();
    cy.contains("Produto adicionado ao Carrinho", {timeout: 5000}).should("be.visible");
    cy.get('[class="styles__LinkWrapper-sc-1nkubcs-3 eoHhru"]', {timeout: 10000}).click();
})

Cypress.Commands.add("alteracaoItem", () => {
    cy.get('[class="svg-inline--fa fa-plus fa-1x "]').click();
    cy.contains("2", {timeout: 5000}).should("be.visible");
})

Cypress.Commands.add("remocaoItem", () => {
    cy.get('[class="svg-inline--fa fa-minus fa-1x "]').click();
    cy.contains("1", {timeout: 5000}).should("be.visible");
})

Cypress.Commands.add("conclusaoCompra", () => {
    cy.get('[class="styles__Wrapper-sc-nahdkg-0 iesoOZ"]').click();
    cy.contains("Acesse sua conta", {timeout: 5000}).should("be.visible");
})

Cypress.Commands.add("realizacaoLogin", () => {
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"]').eq(0).click().type("teste@teste.com.br");
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"]').eq(1).click().type(123456);
    cy.get('[class="styles__Wrapper-sc-nahdkg-0 iesoOZ"]').click();
    cy.contains("E-mail ou senha inválidos.", {timeout: 5000}).should("be.visible");
})
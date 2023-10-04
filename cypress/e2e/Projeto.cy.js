describe('Testar o site da Cobasi', () => {
    beforeEach(() => {
        cy.visit('https://www.cobasi.com.br/', {timeout: 20000});
    })

    it('Busca de item', () => {
        cy.buscaItem();
    })

    it('Adicao de um item no carrinho', () => {
        cy.buscaItem();
        cy.adicaoItem();
    })

    it('Alteracao de quantidade de um item do carrinho', () => {
        cy.buscaItem();
        cy.adicaoItem();
        cy.alteracaoItem();
    })

    it('Remocao de um item do carrinho', () => {
        cy.buscaItem();
        cy.adicaoItem();
        cy.alteracaoItem();
        cy.remocaoItem();
    })

    it('Conclusao de compra', () => {
        cy.buscaItem();
        cy.adicaoItem();
        cy.alteracaoItem();
        cy.remocaoItem();        
        cy.conclusaoCompra();
    })

    it('Realizacao de login', () => {
        cy.buscaItem();
        cy.adicaoItem();
        cy.alteracaoItem();
        cy.remocaoItem();        
        cy.conclusaoCompra();
        cy.realizacaoLogin();
    })
})

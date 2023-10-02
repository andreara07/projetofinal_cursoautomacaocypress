/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { elementos } from "../../Pages/ProjetoPages";

const elementosSite = elementos;

Given("que o usuario esta no site", function () {
    cy.visit(URL);
});
When("ele pesquisa por Biofresh", function () {
    cy.get(elementosSite.campoPesquisa).type("Biofresh").type("{ENTER}");
});
Then("o produto e exibido", function () {
    cy.get(elementosSite.produto).should("be.visible");
});

Given("que o usuario selecinou o produto desejado", function () {
    cy.get(elementosSite.produto).type("{ENTER}");
});
When("ele adiciona o item no carrinho", function () {
    cy.get(elementosSite.botaoAdicionarItem).type("{ENTER}");
});
Then("a sacola e aberta automaticamente", function () {
    cy.get(elementosSite.validadorSacola).should("be.visible")
});

Given("que o usuario esta no carrinho", function () {
    cy.get(elementosSite.validadorSacola).should("be.visible")
});
When("ele altera a quantidade de um item do carrinho", function () {
    cy.get(elementosSite.botaoAumentarQuantidade).type("{ENTER}");
});
Then("a quantidade de itens e alterada", function () {
    cy.get(elementosSite.validadorItens).should("be.visible");
});

Given("que o usuario esta no carrinho", function () {
    cy.get(elementosSite.validadorSacola).should("be.visible")
});
When("ele remove um item do carrinho", function () {
    cy.get(elementosSite.botaoDiminuirQuantidade).type("{ENTER}");
});
Then("a quantidade de itens e alterada", function () {
    cy.get(elementosSite.validadorItens).should("not.be.visible");
});

Given("que o usuario esta no carrinho", function () {
    cy.get(elementosSite.validadorSacola).should("be.visible")
});
When("ele finaliza a compra", function () {
    cy.get(elementosSite.botaoFinalizarCompra).type("{ENTER}");
});
Then("a tela de login e aberta", function () {
    cy.get(elementosSite.validadorLogin).should("be.visible");
});

Given("que o usuario esta na tela de login", function () {
    cy.get(elementosSite.validadorLogin).should("be.visible");
});
When("ele entra com o usuario e a senha incorretos", function () {
    cy.get(elementosSite.campoUsuario).type("{ENTER}").type(valorUsuario);
    cy.get(elementosSite.campoSenha).type("{ENTER}").type(valorSenha);
});
Then("o login nao e realizado", function () {
    cy.get(elementosSite.validadorLogin).should(be.visible);
});



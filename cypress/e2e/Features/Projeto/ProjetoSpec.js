/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { elementos } from "../../Pages/ProjetoPages";

const elementosSite = elementos;

Given("que o usuario esta no site", function () {
    cy.visit(URL);
});
When("ele pesquisa por Biofresh", function () {
    cy.get(elementosSite.campoPesquisa).click().type(elementosSite.nomeProduto).type("{ENTER}");
});
Then("o produto e exibido", function () {
    cy.contains(elementosSite.validadorProduto, {timeout: 5000}).should("be.visible");
});

Given("que o usuario selecina o produto", function () {
    cy.get(elementosSite.linkProduto).click();
});
When("ele adiciona o produto no carrinho", function () {
    cy.get(elementosSite.botaoAdicionarItem).click();
});
Then("e aberto um pop up para o carrinho", function () {
    cy.contains(elementosSite.validadorCarrinho, {timeout: 5000}).should("be.visible")
});

Given("que o usuario esta no carrinho", function () {
    cy.contains(elementosSite.validadorCarrinho).should("be.visible")
});
When("ele adiciona mais um item no carrinho", function () {
    cy.get(elementosSite.botaoAumentarQuantidade).click();
});
Then("a quantidade de itens e alterada", function () {
    cy.contains(elementosSite.validadorQuantidadeMaior, {timeout: 5000}).should("be.visible");
});

Given("que o usuario esta no carrinho", function () {
    cy.contains(elementosSite.validadorCarrinho).should("be.visible")
});
When("ele remove um item do carrinho", function () {
    cy.get(elementosSite.botaoDiminuirQuantidade).click();
});
Then("a quantidade de itens e alterada", function () {
    cy.contains(elementosSite.validadorQuantidadeMenor, {timeout: 5000}).should("not.be.visible");
});

Given("que o usuario esta no carrinho", function () {
    cy.contains(elementosSite.validadorCarrinho).should("be.visible")
});
When("ele finaliza a compra", function () {
    cy.get(elementosSite.botaoFinalizarCompra).click();
});
Then("a tela de login e aberta", function () {
    cy.contains(elementosSite.validadorLogin, {timeout: 5000}).should("be.visible");
});

Given("que o usuario esta na tela de login", function () {
    cy.contains(elementosSite.validadorLogin).should("be.visible");
});
When("ele entra com o usuario e a senha incorretos", function () {
    cy.get(elementosSite.camposLogin).click().type(valorUsuario);
    cy.get(elementosSite.camposLogin).click().type(valorSenha);
});
Then("o login nao e realizado", function () {
    cy.contains(elementosSite.validadorLogin, {timeout: 5000}).should(be.visible);
});



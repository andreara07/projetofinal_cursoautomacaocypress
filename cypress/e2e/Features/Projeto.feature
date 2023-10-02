Feature: Testar o site da Petz

    Scenario: Busca de item
        Given que o usuario esta no site da Petz
        When ele pesquisa por Biofresh
        Then o produto e exibido

    Scenario: Adicao de um item no carrinho
        Given que o usuario selecinou o produto desejado
        When ele adiciona o item no carrinho
     Then a sacola e aberta automaticamente

    Scenario: Alteracao de quantidade de um item do carrinho
        Given que o usuario esta no carrinho
        When ele altera a quantidade de um item do carrinho
        Then o valor total e recalculado

    Scenario: Remocao de um item do carrinho
        Given que o usuario esta no carrinho
        When ele remove um item do carrinho
        Then a quantidade de itens e alterada

    Scenario: Conclusao de compra
        Given que o usuario esta no carrinho
        When ele finaliza a compra
        Then a tela de login e aberta

    Scenario: Realizacao de login
        Given que o usuario esta na tela de login
        When ele entra com o usuario e a senha incorretos
        Then o login nao e realizado
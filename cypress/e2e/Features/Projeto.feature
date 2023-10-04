Feature: Testar o site da Cobasi

    Scenario: Busca de item
        Given que o usuario esta no site 
        When ele pesquisa por Biofresh
        Then o produto e exibido

    Scenario: Adicao de um item no carrinho
        Given que o usuario selecina o produto 
        When ele adiciona o produto no carrinho
        Then e aberto um pop up para o carrinho

    Scenario: Alteracao de quantidade de um item do carrinho
        Given que o usuario esta no carrinho
        When ele adiciona mais um item no carrinho
        Then a quantidade de itens e alterada

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
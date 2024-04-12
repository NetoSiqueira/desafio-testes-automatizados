*** Settings ***

Documentation    Funcionalidade adicionar conta

Resource    ../step/contasSteps.resource

*** Test Cases ***

Cenario: Adicionar conta com sucesso
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Adicionar”
    E o usuario preencher o campo nome
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de sucesso:    Conta adicionada com sucesso!

Cenario: Adicionar conta em branco
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Adicionar”
    E o usuario nao preencher o campo nome
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de erro:    Informe o nome da conta

Cenario: Adicionar conta existente
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Adicionar”
    E o usuario preencher o campo nome ja existente
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de erro:    Já existe uma conta com esse nome!

Cenario: Adicionar conta com caracteres especiais
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Adicionar”
    E o usuario preencher o campo nome com caracteres especiais
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de sucesso:    Conta adicionada com sucesso!



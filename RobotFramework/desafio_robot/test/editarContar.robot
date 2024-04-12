*** Settings ***

Documentation    Funcionalidade adicionar Editar conta

Resource    ../step/contasSteps.resource

*** Test Cases ***

Cenario: Editar conta com sucesso
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Listar”
    E o usuario selecionar a opção editar conta
    E o usuario preencher o campo nome com nome diferente
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de sucesso:    Conta alterada com sucesso!

Cenario: Editar conta utilizando o mesmo nome
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Listar”
    E o usuario selecionar a opção editar conta
    E o usuario preencher o campo nome com mesmo nome
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de sucesso:    Conta alterada com sucesso!

Cenario: Editar conta com nome de conta existente
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Listar”
    E o usuario selecionar a opção editar conta
    E o usuario preencher o campo nome com nome existente
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de erro:    Já existe uma conta com esse nome!

Cenario: Editar conta com nome em branco
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Listar”
    E o usuario selecionar a opção editar conta
    E o usuario nao preencher o campo nome 
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de erro:    Informe o nome da conta

Cenario: Editar conta com caracteres especiais no nome
    Dado que o usuario esteja logado
    Quando o usuario clicar no link “Contas”
    E o usuario clicar no link “Listar”
    E o usuario selecionar a opção editar conta
    E o usuario preencher o campo nome com caracteres especiais
    E o usuario clicar no botao “Salvar”
    Então o sistema exibe uma mensagem de sucesso:    Conta alterada com sucesso!

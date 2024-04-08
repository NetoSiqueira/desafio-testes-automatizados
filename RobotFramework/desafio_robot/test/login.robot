*** Settings ***

Documentation    Funcionalidade de login

Resource    ../step/loginSteps.resource


*** Test Cases ***
Cenario: Login com sucesso
    Dado que o usuario esteja no site seu barriga
    Quando o usuario preencher o campo email do login
    E o usuario preencher o campo senha
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de sucesso:    Bem vindo, teste!

Cenario: Login com email em branco   
    Dado que o usuario esteja no site seu barriga
    Quando o usuario nao preencher o campo email
    E o usuario preencher o campo senha
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de erro:    Email é um campo obrigatório

Cenario: Login com senha em branco   
    Dado que o usuario esteja no site seu barriga
    Quando o usuario preencher o campo email do login
    E o usuario nao preencher o campo senha
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de erro:    Senha é um campo obrigatório

Cenario: Login com email invalido
    Dado que o usuario esteja no site seu barriga
    Quando o usuario preencher o campo email invalido
    E o usuario preencher o campo senha
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de erro:    Problemas com o login do usuário

Cenario: Login com senha inválida
    Dado que o usuario esteja no site seu barriga
    Quando o usuario preencher o campo email do login
    E o usuario preencher o campo senha invalido
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de erro:    Problemas com o login do usuário

Cenario: Login com email e senha em brancos
    Dado que o usuario esteja no site seu barriga
    Quando ousuario nao preencher o campo email
    E o usuario nao preencher o campo senha
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe duas mensagem de erros:    Email é um campo obrigatório    Senha é um campo obrigatório

Cenario: Login com email e senha inválidos
    [Tags]    test
    Dado que o usuario esteja no site seu barriga
    Quando o usuario preencher o campo email invalido
    E o usuario preencher o campo senha invalido
    E o usuario clicar no botao “Entrar”
    Então o sistema exibe uma mensagem de erro:    Problemas com o login do usuário

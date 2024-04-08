*** Settings ***

Resource    ../page/cadastroPage.resource
Resource    ../page/alertas.resource
Resource    ../page/loginPage.resource

*** Keywords ***

Dado que o usuario esteja no site seu barriga
    Abrir navegador

Quando o usuario preencher o campo email do login
    InserirEmail    teste@desafio.com

E o usuario preencher o campo senha
    InserirSenha    1234

E o usuario clicar no botao “Entrar”
    ClicarNoBotao

Então o sistema exibe uma mensagem de sucesso:
    [Arguments]    ${msg}
    AlertaDeSucesso    ${msg}
    Close Browser

Quando o usuario nao preencher o campo email
    InserirEmail    email=

Então o sistema exibe uma mensagem de erro:
    [Arguments]    ${msg}
    AlertaDeErro    ${msg}
    Close Browser

E o usuario nao preencher o campo senha
    InserirSenha    senha=

Quando o usuario preencher o campo email invalido
    InserirEmail    testetestando@invalido.com

E o usuario preencher o campo senha invalido
    InserirSenha    123456

Então o sistema exibe duas mensagem de erros:
    [Arguments]    ${msg1}    ${msg2}
    Alerta de erros    ${msg1}    ${msg2}
    Capture Page Screenshot
    Close Browser
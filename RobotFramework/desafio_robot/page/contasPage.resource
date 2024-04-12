*** Settings ***

Resource    ../base/base.resource
Resource    alertas.resource
Resource    navegadorPage.resource
Resource    loginPage.resource
Resource    ../page/cadastroPage.resource

*** Variables ***
${add_nome_conta}    //input[@id="nome"]
${conta_edit}        Conta para alterar
${edit}             //td[text()="${conta_edit}"]/..//span[@class="glyphicon glyphicon-edit"]    


*** Keywords ***

ClicarConta
    Clicar    ${contas}

ClicarAdicionar
    Clicar    ${add_contas}

Reset
    Clicar    ${reset}

InserirConta
    [Arguments]    ${nome}
    Escrever    ${add_nome_conta}    ${nome}

Clicar Editar
    Clicar    ${edit}

Clicar lista
    Clicar    ${listar}
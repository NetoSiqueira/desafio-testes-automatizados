*** Settings ***

Resource    ../base/base.resource
Resource    ../page/navegadorPage.resource
Resource    alertas.resource
Resource    loginPage.resource
Resource    ../page/cadastroPage.resource
Resource    contasPage.resource

*** Variables ***
${data_mov}         //input[@id="data_transacao"]
${data_pag_mov}    //input[@id="data_pagamento"]
${desc_mov}        //input[@id="descricao"]
${int_mov}         //input[@id="interessado"]
${valor_mov}       //input[@id="valor"]
${sel_conta}       //select[@id="conta"]
${conta_movimentacao}    Conta para movimentacoes
${selecionar_conta}    //option[text()="${conta_movimentacao}"] 


*** Keywords ***
Clicar movimentacao
    Clicar    ${movimentacao}

Inserir data movimentacao
    [Arguments]    ${data}
    Escrever    ${data_mov}    ${data}

Inserir data pagamento
    [Arguments]    ${data}
    Escrever    ${data_pag_mov}    ${data}

Inserir descricao
    [Arguments]    ${desc}
    Escrever    ${desc_mov}    ${desc}

Inserir interessado
    [Arguments]    ${int}
    Escrever     ${int_mov}    ${int}

Inserir valor
    [Arguments]    ${valor}
    Escrever    ${valor_mov}    ${valor}

Selecionar conta
    Clicar     ${sel_conta}
    Clicar     ${selecionar_conta}
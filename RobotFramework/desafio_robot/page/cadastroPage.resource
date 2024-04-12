*** Settings ***
Documentation    Page cadastro

Resource    ../base/base.resource
Resource    ../page/navegadorPage.resource
Resource    ../page/alertas.resource

*** Variables ***
${input_nome}     //input[@id="nome"]
${input_email}    //input[@id="email"]
${input_senha}    //input[@id="senha"]
${input_bnt}      //input[@class="btn btn-primary"]    


*** Keywords ***
Clicar cadastrar
    Clicar    ${cadastro}

InserirNome
    [Arguments]    ${nome}
    Escrever        ${input_nome}    ${nome}

InserirEmail
    [Arguments]    ${email}
    Escrever        ${input_email}    ${email}
InserirSenha
    [Arguments]    ${senha}
    Escrever        ${input_senha}    ${senha}
Salvar
    Clicar    ${input_bnt}    
    Capture Page Screenshot
AlertaDeSucesso
    [Arguments]    ${msg}
    Retornar Mensagem    ${alerta_sucesso}    ${msg}
    Capture Page Screenshot
AlertaDeErro
    [Arguments]    ${msg}
    Retornar Mensagem    ${alerta_erro}    ${msg}
    Capture Page Screenshot


AlertaDeErro2
    [Arguments]    ${msg}    ${msg2}
    Element Should Contain    ${alerta_erro}    ${msg}
    Element Should Contain    ${alerta_erro}    ${msg2}
    Capture Page Screenshot
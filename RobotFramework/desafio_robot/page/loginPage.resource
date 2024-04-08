*** Settings ***

Resource    ../base/base.resource
Resource    ../page/alertas.resource

*** Variables ***
${bnt_login}    //button[@class="btn btn-primary"]


*** Keywords ***
ClicarNoBotao
    Capture Page Screenshot
    Clicar    ${bnt_login}    

Alerta de erros
    [Arguments]     ${msg1}    ${msg2}
    Element Should Contain    ${alerta_erro}    ${msg1}
    Element Should Contain    ${alerta_erro2}    ${msg2}   
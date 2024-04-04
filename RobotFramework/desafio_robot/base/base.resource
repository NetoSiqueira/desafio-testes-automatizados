** Settings **
Library  SeleniumLibrary

*** Variables ***
${Browser}    chrome
${Site}       https://seubarriga.wcaquino.me/login

*** Keywords ***

Abrir navegador
    Open Browser    ${Site}       ${Browser}
    Maximize Browser Window

Escrever
    [Arguments]    ${locator}    ${variavel}
    Input Text    ${locator}    ${variavel}

Clicar
    [Arguments]    ${locator}
    Click Element    ${locator} 
Retornar Mensagem
    [Arguments]     ${locator}    ${texto} 
    Element Text Should Be    ${locator}    ${texto}  
*** Settings ***
Documentation    Funcionaliade Cadastro de usuario

Resource    ../step/cadastroSteps.resource

*** Test Cases ***
Cenario: Cadastrar usuário com sucesso
    Dado que o usuario esteja no site seu barriga
     
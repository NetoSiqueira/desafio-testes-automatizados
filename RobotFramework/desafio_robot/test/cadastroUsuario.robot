*** Settings ***
Documentation    Funcionaliade Cadastro de usuario

Resource    ../step/cadastroSteps.resource

*** Test Cases ***
Cenario: Cadastrar usuário com sucesso
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario 
    E o usuario preencher o campo nome
    E o usuario preencher o campo email
    E o usuario preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de sucesso:     Usuário inserido com sucesso 

Cenario: Cadastrar usuário com usuário em branco
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario nao preencher o campo nome
    E o usuario preencher o campo email
    E o usuario preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de erro:    Nome é um campo obrigatório
    
Cenario: Cadastrar usuário com nome de usuário com um carácter
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario preencher o campo nome com um caracter
    E o usuario preencher o campo email
    E o usuario preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de sucesso:    Usuário inserido com sucesso

Cenario: Cadastrar usuário com campo email em branco
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario preencher o campo nome
    E o usuario nao preencher o campo email
    E o usuario preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de erro:    Email é um campo obrigatório

Cenario: Cadastrar usuário com email já cadastrado
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario preencher o campo nome
    E o usuario preencher o campo email ja cadastrado
    E o usuario preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de erro:    Endereço de email já utilizado

Cenario: Cadastrar usuário com senha em branco
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario preencher o campo nome
    E o usuario preencher o campo email
    E o usuario nao preencher o campo senha
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de erro:    Senha é um campo obrigatório 

Cenario: Senha com um carácter
    Dado que o usuario esteja no site seu barriga
    Quando o usuario clicar no link Novo usuario
    E o usuario preencher o campo nome
    E o usuario preencher o campo email
    E o usuario preencher o campo senha com caracter
    E o usuario clicar no botao Cadastrar
    Então o sistema exibe uma mensagem de sucesso:    Usuário inserido com sucesso



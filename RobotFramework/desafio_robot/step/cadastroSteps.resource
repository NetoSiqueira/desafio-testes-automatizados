*** Settings ***
Documentation    Step cadastro

Resource    ../page/cadastroPage.resource


*** Keywords ***

Dado que o usuario esteja no site seu barriga
    Abrir navegador
Quando o usuario clicar no link Novo usuario
    Clicar cadastrar
E o usuario preencher o campo nome
    InserirNome    teste
E o usuario preencher o campo email
     ${date}=    Get Time    sec
     InserirEmail    testedesafio${date}@teste.com
E o usuario preencher o campo senha
    InserirSenha    1234
E o usuario clicar no botao Cadastrar
    Capture Page Screenshot
    Salvar
Então o sistema exibe uma mensagem de sucesso:
    [Arguments]    ${msg}    
    AlertaDeSucesso         ${msg}

E o usuario nao preencher o campo nome
    InserirNome    nome=

Então o sistema exibe uma mensagem de erro:
    [Arguments]    ${msg}
    AlertaDeErro    ${msg}

E o usuario preencher o campo nome com um caracter
    InserirNome    @
E o usuario nao preencher o campo email
    InserirEmail    email=

E o usuario preencher o campo email ja cadastrado
    InserirEmail    teste@teste.com

E o usuario nao preencher o campo senha    
    InserirSenha    senha=

E o usuario preencher o campo senha com caracter
    InserirSenha    1
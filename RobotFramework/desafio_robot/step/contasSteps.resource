*** Settings ***

Resource    ../page/contasPage.resource


*** Keywords ***

Dado que o usuario esteja logado
    Abrir navegador
    InserirEmail    teste@desafio.com
    InserirSenha    1234
    ClicarNoBotao
    Reset

Quando o usuario clicar no link “Contas”   
    ClicarConta

E o usuario clicar no link “Adicionar”  
    ClicarAdicionar  

E o usuario preencher o campo nome
    InserirConta    teste

E o usuario clicar no botao “Salvar”
    ClicarNoBotao

Então o sistema exibe uma mensagem de sucesso:
    [Arguments]    ${msg}
    AlertaDeSucesso    ${msg}
    Close Browser

E o usuario nao preencher o campo nome
    InserirConta    nome=

Então o sistema exibe uma mensagem de erro:
    [Arguments]    ${msg}
    AlertaDeErro    ${msg}
    Close Browser

E o usuario preencher o campo nome ja existente
    InserirConta    Conta mesmo nome

E o usuario preencher o campo nome com caracteres especiais
    InserirConta    @

E o usuario clicar no link “Listar”
    Clicar lista

E o usuario selecionar a opção editar conta   
    Clicar Editar


E o usuario preencher o campo nome com nome diferente
    InserirConta    teste   

E o usuario preencher o campo nome com mesmo nome
    InserirConta    Conta para alterar

E o usuario preencher o campo nome com nome existente
    InserirConta    Conta mesmo nome

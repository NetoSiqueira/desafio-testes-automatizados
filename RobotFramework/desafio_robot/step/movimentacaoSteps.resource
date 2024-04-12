*** Settings ***

Resource    ../page/movimentacaoPage.resource

*** Keywords ***

Dado que o usuario esteja logado
    Abrir navegador
    InserirEmail    teste@desafio.com
    InserirSenha    1234
    ClicarNoBotao
    Reset

Quando o usuario clicar no link “Criar Movimentação”
    Clicar movimentacao

E o usuario preencher o campo Data de Movimentação
    Inserir data movimentacao    11/04/2024

E o usuario preencher o campo Data de Pagamento
    Inserir data pagamento    11/04/2024

E o usuario preencher o campo Descrição
    Inserir descricao    teste

E o usuario preencher o campo Interessado
    Inserir interessado    teste

E o usuario preencher o campo Valor
    Inserir valor    123

E o usuario preencher o campo Conta
    Selecionar conta

E o usuario clicar no botao “Salvar”
    ClicarNoBotao

Então o sistema exibe uma mensagem de sucesso:
    [Arguments]    ${msg}
    AlertaDeSucesso    ${msg}
    Close Browser

E o usuario nao preencher o campo Data de Movimentação
    Inserir data movimentacao    data=

Então o sistema exibe uma mensagem de erro:
    [Arguments]    ${msg}
    AlertaDeErro    ${msg}
    Close Browser

E o usuario nao preencher o campo Data de Pagamento
    Inserir data pagamento        data=

E o usuario nao preencher o campo Descrição
    Inserir descricao        desc=

E o usuario nao preencher o campo Interessado
    Inserir interessado        int=

E o usuario nao preencher o campo Valor
    Inserir valor    valor=

Então o sistema exibe uma mensagem de erros: 
    [Arguments]    ${msg}    ${msg2}
    AlertaDeErro2    ${msg}    ${msg2}
    Close Browser

E o usuario preencher o campo Data de Movimentação sem barra
    Inserir data movimentacao    14112024

E o usuario preencher o campo Data de Pagamento sem barra
    Inserir data pagamento    14112024

E o usuario preencher o campo Valor com caracteres
    Inserir valor    @
 
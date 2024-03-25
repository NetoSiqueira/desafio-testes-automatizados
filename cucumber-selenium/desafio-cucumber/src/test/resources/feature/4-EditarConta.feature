#language: pt

  Funcionalidade: Editar Conta gastos/receitas

    @cenario_18
    Cenario: Editar conta com sucesso
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Listar"
      E o usuario selecionar a opção editar conta
      E o usuario preencher o campo nome com nome diferente
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de sucesso: "Conta alterada com sucesso!"

    @cenario_19
    Cenario: Editar conta utilizando o mesmo nome
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Listar"
      E o usuario selecionar a opção editar conta
      E o usuario preencher o campo nome  com mesmo nome
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de sucesso: "Conta alterada com sucesso!"

     @cenario_20
     Cenario: Editar conta com nome de conta existente
       Dado que o usuario esteja logado
       Quando o usuario clicar no link  "Contas"
       E o usuario clicar no link  "Listar"
       E o usuario selecionar a opção editar conta
       E o usuario preencher o campo nome com nome existente
       E o usuario clicar no botao “Salvar”
       Então o sistema exibe  uma mensagem de erro: "Já existe uma conta com esse nome!"

     @cenario_21
     Cenario: Editar conta com nome em branco
       Dado que o usuario esteja logado
       Quando o usuario clicar no link  "Contas"
       E o usuario clicar no link  "Listar"
       E o usuario selecionar a opção editar conta
       E o usuario nao preencher o campo nome
       E o usuario clicar no botao “Salvar”
       Então o sistema exibe  uma mensagem de erro: "Informe o nome da conta"

     @cenario_22
     Cenario: Editar conta com caracteres especiais no nome
       Dado que o usuario esteja logado
       Quando o usuario clicar no link  "Contas"
       E o usuario clicar no link  "Listar"
       E o usuario selecionar a opção editar conta
       E o usuario preencher o campo nome com caracteres especiais
       E o usuario clicar no botao “Salvar”
       Então o sistema exibe  uma mensagem de sucesso: "Conta alterada com sucesso!"
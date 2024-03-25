#language: pt

  Funcionalidade: Adicionar conta de gastos/receitas

    @cenario_14
    Cenario: Adicionar conta com sucesso
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Adicionar"
      E o usuario preencher o campo nome
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de sucesso: "Conta adicionada com sucesso!"

    @cenario_15
    Cenario: Adicionar conta em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Adicionar"
      E o usuario nao preencher o campo nome
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Informe o nome da conta"

    @cenario_16
    Cenario: Adicionar conta existente
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Adicionar"
      E o usuario preencher o campo nome ja existente
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Já existe uma conta com esse nome!"



    @cenario_17
    Cenario: Adicionar conta com caracteres especiais
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Contas"
      E o usuario clicar no link  "Adicionar"
      E o usuario preencher o campo nome com caracteres especiais
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de sucesso: "Conta adicionada com sucesso!"
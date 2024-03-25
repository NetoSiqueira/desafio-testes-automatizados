#language:pt
  Funcionalidade: Cria movimentação

    @cenario_23
    Cenario: Criar movimentação com sucesso
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de sucesso: "Movimentação adicionada com sucesso!"

    @cenario_24
    Cenario: Criar movimentação com data de movimentação em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario nao preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Data da Movimentação é obrigatório"

    @cenario_25
    Cenario: Criar movimentação com data de pagamento em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario nao preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Data do pagamento é obrigatório"

    @cenario_26
    Cenario: Criar movimentação com descrição em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario nao preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Descrição é obrigatório"

    @cenario_27
    Cenario: Criar movimentação com interessado em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario nao preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Interessado é obrigatório"

    @cenario_28
    Cenario: Criar movimentação com valor em branco
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario nao preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  duas mensagem de erros:  "Valor é obrigatório" "Valor deve ser um número"

    @cenario_29
    Cenario: Criar movimentação com data de movimentação sem as barras
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação sem barra
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Data da Movimentação inválida (DD/MM/YYYY)"

    @cenario_30
    Cenario: Criar movimentação com data do pagamento sem as barras
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento sem barra
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Data do pagamento inválida (DD/MM/YYYY)"

    @cenario_31
    Cenario: Criar movimentação com valor com caracteres
      Dado que o usuario esteja logado
      Quando o usuario clicar no link  "Criar Movimentação"
      E o usuario preencher o campo Data de Movimentação
      E o usuario preencher o campo Data de Pagamento
      E o usuario preencher o campo Descrição
      E o usuario preencher o campo Interessado
      E o usuario preencher o campo Valor com caracteres
      E o usuario preencher o campo Conta
      E o usuario clicar no botao “Salvar”
      Então o sistema exibe  uma mensagem de erro: "Valor deve ser um número"



#language: pt

  Funcionalidade: Cadastro de usuario

    @cenario_1
    Cenario: Cadastrar usuário com sucess
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  “Novo usuario”
      E o usuario preencher o campo nome
      E o usuario preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”


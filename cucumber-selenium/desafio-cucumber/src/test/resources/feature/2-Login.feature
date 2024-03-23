#language: pt

  Funcionalidade: Login

    @cenario_8
    Cenario: Login com sucesso
      Dado que o usuario esteja no site seu barriga
      Quando o usuario preencher o campo email do login
      E o usuario preencher o campo senha do login
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de sucesso: "Bem vindo, teste!"


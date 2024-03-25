#language: pt

  Funcionalidade: Login

    @cenario_8
    Cenario: Login com sucesso
      Dado que o usuario esteja no site seu barriga
      Quando o usuario preencher o campo email do login
      E o usuario preencher o campo senha do login
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de sucesso: "Bem vindo, teste!"

    @cenario_9
    Cenario: Login com email em branco
      Dado que o usuario esteja no site seu barriga
      Quando o usuario nao preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de erro: "Email é um campo obrigatório"

    @cenario_10
    Cenario:  Login com email invalido
      Dado que o usuario esteja no site seu barriga
      Quando o usuario preencher o campo email invalido
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de erro: "Problemas com o login do usuário"


    @cenario_11
    Cenario: Login com senha inválida
      Dado que o usuario esteja no site seu barriga
      Quando o usuario preencher o campo email do login
      E o usuario preencher o campo senha invalido
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de erro: "Problemas com o login do usuário"

    @cenario_12
    Cenario: Login com email e senha em brancos
      Dado que o usuario esteja no site seu barriga
      Quando o usuario nao preencher o campo email
      E o usuario nao preencher o campo senha
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  duas mensagem de erros: "Email é um campo obrigatório" "Senha é um campo obrigatório"

    @cenario_13
    Cenario: Login com email e senha inválidos
      Dado que o usuario esteja no site seu barriga
      Quando o usuario preencher o campo email invalido
      E o usuario preencher o campo senha invalido
      E o usuario clicar no botao “Entrar”
      Então o sistema exibe  uma mensagem de erro: "Problemas com o login do usuário"
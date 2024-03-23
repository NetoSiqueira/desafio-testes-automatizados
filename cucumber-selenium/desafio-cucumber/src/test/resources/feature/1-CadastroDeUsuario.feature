#language: pt

  Funcionalidade: Cadastro de usuario

    @cenario_1
    Cenario: Cadastrar usuário com sucess
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome
      E o usuario preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de sucesso: "Usuário inserido com sucesso"


    @cenario_2
    Cenario: Campo usuário em branco
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario nao preencher o campo nome
      E o usuario preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de erro: "Nome é um campo obrigatório"

    @cenario_3
    Cenario: Nome de usuário com um carácter
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome com um caracter
      E o usuario preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de sucesso: "Usuário inserido com sucesso"

    @cenario_4
    Cenario: Campo email em branco
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome
      E o usuario nao preencher o campo email
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de erro: "Email é um campo obrigatório"

    @cenario_5
    Cenario: Email já cadastrado
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome
      E o usuario preencher o campo email ja cadastrado
      E o usuario preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de erro: "Endereço de email já utilizado"

    @cenario_6
    Cenario: Campo senha em branco
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome
      E o usuario preencher o campo email
      E o usuario nao preencher o campo senha
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de erro: "Senha é um campo obrigatório"

    @cenario_7
    Cenario: Senha com um carácter
      Dado que o usuario esteja no site seu barriga
      Quando o usuario clicar no link  "Novo usuário?"
      E o usuario preencher o campo nome
      E o usuario preencher o campo email
      E o usuario preencher o campo senha com caracter
      E o usuario clicar no botao “Cadastrar”
      Então o sistema exibe  uma mensagem de sucesso: "Usuário inserido com sucesso"

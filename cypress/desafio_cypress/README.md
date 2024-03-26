# cypress-teste-Interface

## Para utilizar o projeto

### Possuir um editor de texto (para instalar  o Visual Studio Code)

sudo apt install code

### Comando para criar Projeto Node:


    npm init -y

## Para instalar o cypress com a última versão disponível com dependencia dev:

    npm install -D cypress
    


## Para instalar o cypress na versão específica do projeto:


    npm install cypress@3.6.0
    


## Configurar o arquivo "package.json" para abrir o cypress:


    "cypress:open": "cypress open"
    


## Para executar o script que abre o cypress:


    npm run cypress:open
    


## Para executar sem o script no terminal:


    .node_modules\.bin\cypress open



 ## Como rodar no cli

Para rodar em cli no modo headless podemos pegar o comando que esta na pasta do nosso projeto file packed.jason e executar o comando 
cypress run ("cypress": "cypress run") "npx cypress run" e ele executa em linha do comando, 
e o comando para um test especifico 
npx cypress run --spec cypress/integration/backend.js

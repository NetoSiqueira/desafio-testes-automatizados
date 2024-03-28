/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'
import moment from 'moment';
describe('Cadastro usuario', () =>{

describe('Cadastrar usuário com sucess', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome', () => {
       
        cy.inserirNome('teste')
    });
    it('E o usuario preencher o campo email', () => {
       const now = new Date
        cy.inserirEmail('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario preencher o campo senha', () => {
        cy.inserirSenha('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”', () => {
        cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Usuário inserido com sucesso')
    });
})

describe('Cadastrar usuário com usuário em branco', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario nao preencher o campo nome', () => {
       cy.naoPreencher(loc.CADASTRO.NOME)
    });
    it('E o usuario preencher o campo email', () => {
       const now = new Date
       cy.inserirEmail('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario preencher o campo senha', () => {
        cy.inserirSenha('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de erro: ”Nome é um campo obrigatório"', () => {
        cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Nome é um campo obrigatório')
    });
})

describe('Cadastrar usuário com nome de usuário com um carácter', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome com um caracter', () => {
       
        cy.inserirNome('#')
    });
    it('E o usuario preencher o campo email', () => {
       const now = new Date
        cy.inserirEmail('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario preencher o campo senha', () => {
        cy.inserirSenha('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”', () => {
        cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Usuário inserido com sucesso')
    });
})

describe('Cadastrar usuário com campo email em branco', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome com um caracter', () => {
        cy.inserirNome('teste')
    });
    it('E o usuario nao preencher o campo email', () => {
        cy.naoPreencher(loc.CADASTRO.EMAIL)
    });
    it('E o usuario preencher o campo senha', () => {
        cy.inserirSenha('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de erro: ”Email é um campo obrigatório”', () => {
        cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Email é um campo obrigatório')
    });
})

describe('Cadastrar usuário com email já cadastrado', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome', () => {
        cy.inserirNome('teste')
    });
    it('E o usuario preencher o campo email ja cadastrado', () => {
       const now = new Date
        cy.inserirEmail('neto@neto.com')
    });
    it('E o usuario preencher o campo senha', () => {
        cy.inserirSenha('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de erro: ”Endereço de email já utilizado ”', () => {
        cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Endereço de email já utilizado')
    });
})

describe('Cadastrar usuário com senha em branco', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome', () => {
        cy.inserirNome('teste')
    });
    it('E o usuario preencher o campo email', () => {
        const now = new Date
        cy.inserirEmail('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario nao preencher o campo senha', () => {
        cy.naoPreencher(loc.CADASTRO.SENHA)
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de erro: ”Senha é um campo obrigatório ”', () => {
        cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Senha é um campo obrigatório')
    });
})

describe('Senha com um carácter', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.site()
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.clicar(loc.MENU.NOVO_USUARIO)
    });
    it('E o usuario preencher o campo nome', () => {
        cy.inserirNome('teste')
    });
    it('E o usuario preencher o campo email', () => {
        const now = new Date
        cy.inserirEmail('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario preencher o campo senha com caracter', () => {
        cy.inserirSenha('#')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.clicar(loc.CADASTRO.BTN)
    });
    it('Então o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”', () => {
        cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Usuário inserido com sucesso')
    });
})

})
/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'



describe('Login', () => {

    describe('Login com sucesso', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email do login', () => {
             cy.inserirEmail('teste@desafio.com')
         });

         it('E o usuario preencher o campo senha', () => {
             cy.inserirSenha('1234')
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
            cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de sucesso: “Bem vindo, teste!"', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Bem vindo, teste!')
        });
    })

    describe('Login com email em branco', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario nao preencher o campo email', () => {
            cy.naoPreencher(loc.LOGIN.EMAIL)
         });

         it('E o usuario preencher o campo senha', () => {
             cy.inserirSenha('1234')
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
            cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de erro: “Email é um campo obrigatório”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Email é um campo obrigatório')
        });
    })

    describe('Login com senha em branco', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email do login', () => {
             cy.inserirEmail('teste@desafio.com')
         });

         it('E o usuario nao preencher o campo senha', () => {
             cy.naoPreencher(loc.LOGIN.SENHA)
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
             cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de erro: “Senha é um campo obrigatório”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Senha é um campo obrigatório')
        });
    })

    describe('Login com email invalido', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email invalido', () => {
             cy.inserirEmail('testedesafio@desafio.com')
         });

         it('E o usuario preencher o campo senha', () => {
             cy.inserirSenha('1234')
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
            cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de erro: “Problemas com o login do usuário”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Problemas com o login do usuário')
        });
    })

    describe('Login com senha inválida', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email do login', () => {
             cy.inserirEmail('teste@desafio.com')
         });

         it('E o usuario nao preencher o campo senha', () => {
             cy.inserirSenha('12345')
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
             cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de erro: “Problemas com o login do usuário”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Problemas com o login do usuário')
        });
    })

    describe('Login com email e senha em brancos', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email do login', () => {
            cy.naoPreencher(loc.LOGIN.EMAIL)
         });

         it('E o usuario nao preencher o campo senha', () => {
             cy.naoPreencher(loc.LOGIN.SENHA)
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
             cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  duas mensagem de erros: “Email é um campo obrigatório”, “Senha é um campo obrigatório”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Email é um campo obrigatório')
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Senha é um campo obrigatório')
        });
    })
    describe('Login com email e senha inválidos', () =>{
        it('Dado que o usuario esteja no site seu barriga', () => {
            cy.site()
        });
        it('Quando o usuario preencher o campo email invalido', () => {
             cy.inserirEmail('testedesafio@desafio.com')
         });

         it('E o usuario preencher o campo senha invalido', () => {
             cy.inserirSenha('12345')
         });

         it('E o usuario clicar no botao “Cadastrar”', () => {
            cy.clicar(loc.LOGIN.BTN_LOGIN)
         });

         it('Então o sistema exibe  uma mensagem de erro: “Problemas com o login do usuário”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Problemas com o login do usuário')
        });
    })

})
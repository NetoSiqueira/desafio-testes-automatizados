/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'
import moment from 'moment';


describe('Login com sucesso', () =>{

    it('Dado que o usuario esteja no site seu barriga', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    });
    it('Quando o usuario clicar no link  “Novo usuario”', () => {
        cy.get(loc.MENU.NOVO_USUARIO).click()
    });
    it('E o usuario preencher o campo nome', () => {
       
        cy.get(loc.CADASTRO.NOME).type('teste')
    });
    it('E o usuario preencher o campo email', () => {
       const now = new Date
        cy.get(loc.CADASTRO.EMAIL).type('teste'+now.getMilliseconds()+'@teste.com')
    });
    it('E o usuario preencher o campo senha', () => {
        cy.get(loc.CADASTRO.SENHA).type('1234')
    });
    it('E o usuario clicar no botao “Cadastrar”', () => {
        cy.get(loc.CADASTRO.BTN).click()
    });
    it('Então o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”', () => {
        cy.get(loc.ALERT.MSG_SUCESSO).should('contain', 'Usuário inserido com sucesso')
    });

})
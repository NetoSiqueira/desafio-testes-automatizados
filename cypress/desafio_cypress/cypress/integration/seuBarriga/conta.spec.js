/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'



describe('Conta', () => {
    after(()=>{
        cy.clearLocalStorage()
    })

    describe('Adicionar conta com sucesso', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Adicionar”', () => {
           
        });

        it('E o usuario preencher o campo nome', () => {
            cy.inserirConta('teste')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe uma mensagem de sucesso: “Conta adicionada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Conta inserida com sucesso!')
        });
    })

    describe('Adicionar conta em branco', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Adicionar”', () => {
           
        });

        it('E o usuario nao preencher o campo nome', () => {
            cy.naoPreencher(loc.CONTA.NOME)
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           cy.clicar(loc.CONTA.BTN_SALVAR_CONTA)
        });

        it('Então o sistema exibe  uma mensagem de erro: “Informe o nome da conta”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Informe o nome da conta')
        });
    })

    describe('Adicionar conta existente', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Adicionar”', () => {
           
        });

        it('E o usuario preencher o campo nome ja existente', () => {
            cy.inserirConta('Conta mesmo nome')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           cy.clicar(loc.CONTA.BTN_SALVAR_CONTA)
        });

        it('Então o sistema exibe  uma mensagem de erro: “Já existe uma conta com esse nome!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Já existe uma conta com esse nome!')
        });
    })

    describe.only('Adicionar conta com caracteres especiais', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Adicionar”', () => {
           
        });

        it('E o usuario preencher o campo nome com caracteres especiais', () => {
            cy.inserirConta('#')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe uma mensagem de sucesso: “Conta adicionada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Conta inserida com sucesso!')
        });
    })
})
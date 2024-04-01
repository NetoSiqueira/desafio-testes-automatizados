/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'


describe('Editar Conta gastos/receitas', () => {
    after(()=>{
        cy.clearLocalStorage()
    })

    describe('Editar conta com sucesso', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Listar”', () => {
           
        });

        it('E o usuario selecionar a opção editar conta', () => {
            cy.editarConta('Conta para alterar')
        });
        it('E o usuario preencher o campo nome com nome diferente', () => {
            cy.inserirConta('teste')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe uma mensagem de sucesso: “Conta alterada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Conta atualizada com sucesso!')
        });
    })

    describe('Editar conta utilizando o mesmo nome', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Listar”', () => {
           
        });

        it('E o usuario selecionar a opção editar conta', () => {
            cy.editarConta('Conta para alterar')
        });
        it('E o usuario preencher o campo nome  com mesmo nome', () => {
            cy.inserirConta('Conta para alterar')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe uma mensagem de sucesso: “Conta adicionada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Conta atualizada com sucesso!')
        });
    })

    describe('Editar conta com nome de conta existente', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Listar”', () => {
           
        });

        it('E o usuario selecionar a opção editar conta', () => {
            cy.editarConta('Conta para alterar')
        });
        it('E o usuario preencher o campo nome com nome existente', () => {
            cy.inserirConta('Conta mesmo nome')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe  uma mensagem de erro: “Já existe uma conta com esse nome!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Já existe uma conta com esse nome!')
        });
    })

    describe('Editar conta com nome em branco', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Listar”', () => {
           
        });

        it('E o usuario selecionar a opção editar conta', () => {
            cy.editarConta('Conta para alterar')
        });
        it('E o usuario nao preencher o campo nome ', () => {
            cy.naoPreencherConta()
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe  uma mensagem de erro: “Informe o nome da conta”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Informe o nome da conta')
        });
    })

    describe.only('Editar conta com caracteres especiais no nome', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Contas”', () => {
            cy.acessarMenuConta()
        });
        
        it('E o usuario clicar no link “Listar”', () => {
           
        });

        it('E o usuario selecionar a opção editar conta', () => {
            cy.editarConta('Conta para alterar')
        });
        it('E o usuario preencher o campo nome com caracteres especiais', () => {
            cy.inserirConta('#')
        });

        it('E o usuario clicar no botao “Salvar”', () => {
           
        });

        it('Então o sistema exibe uma mensagem de sucesso: “Conta alterada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Conta atualizada com sucesso!')
        });
    })
})
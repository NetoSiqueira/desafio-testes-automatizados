/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'
import '../../support/commandsMovimentacao'


describe('Cria movimentação', () => {
    after(()=>{
        cy.clearLocalStorage()
    })

    describe('Criar movimentação com sucesso', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Criar Movimentação”', () => {
            cy.acessarMovimentacao()
        });
        it('E o usuario preencher o campo Data de Movimentação', () => {
            
        });
        it('E o usuario preencher o campo Data de Pagamento', () => {
            
        });       
        it('E o usuario preencher o campo Descrição', () => {
            cy.inserirDescricao('teste')
        });
        it('E o usuario preencher o campo Interessado', () => {
            cy.inserirInteressado('teste')
        });     
        it('E o usuario preencher o campo Valor', () => {
            cy.inserirValor('123')
        });
        it('E o usuario preencher o campo Conta', () => {
            cy.inserirConta('Conta com movimentacao')
        });
        it('E o usuario clicar no botao “Salvar”', () => {
            cy.salvar()
        });
        it('Então o sistema exibe  uma mensagem de sucesso: ”Movimentação adicionada com sucesso!”', () => {
            cy.verificarMSG(loc.ALERT.MSG_SUCESSO, 'Movimentação inserida com sucesso!')
        });
    })

    describe('Criar movimentação com descrição em branco', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Criar Movimentação”', () => {
            cy.acessarMovimentacao()
        });
        it('E o usuario preencher o campo Data de Movimentação', () => {
            
        });
        it('E o usuario preencher o campo Data de Pagamento', () => {
            
        });
        it('E o usuario nao preencher o campo Descrição', () => {
            cy.inserirDescricao('teste').clear()
        });
        it('E o usuario preencher o campo Interessado', () => {
            cy.inserirInteressado('teste')
        });
        it('E o usuario preencher o campo Valor', () => {
            cy.inserirValor('123')
        });
        it('E o usuario preencher o campo Conta', () => {
            cy.inserirConta('Conta com movimentacao')
        });
        it('E o usuario clicar no botao “Salvar”', () => {
            cy.salvar()
        });
        it('Então visualiza uma mensagem ”Descrição é obrigatório”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Descrição é obrigatório')
        });
    })

    describe('Criar movimentação com interessado em branco', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Criar Movimentação”', () => {
            cy.acessarMovimentacao()
        });
        it('E o usuario preencher o campo Data de Movimentação', () => {
            
        });
        it('E o usuario preencher o campo Data de Pagamento', () => {
            
        });
        it('E o usuario  preencher o campo Descrição', () => {
            cy.inserirDescricao('teste')
        });
        it('E o usuario nao preencher o campo Interessado', () => {
            cy.inserirInteressado('teste').clear()
        });
        it('E o usuario preencher o campo Valor', () => {
            cy.inserirValor('123')
        });
        it('E o usuario preencher o campo Conta', () => {
            cy.inserirConta('Conta com movimentacao')
        });
        it('E o usuario clicar no botao “Salvar”', () => {
            cy.salvar()
        });
        it('Então o sistema exibe  uma mensagem de erro: ”Interessado é obrigatório”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Interessado é obrigatório')
        });
    })

    describe('Criar movimentação com valor em branco', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Criar Movimentação”', () => {
            cy.acessarMovimentacao()
        });
        it('E o usuario preencher o campo Data de Movimentação', () => {
            
        });
        it('E o usuario preencher o campo Data de Pagamento', () => {
            
        });
        it('E o usuario  preencher o campo Descrição', () => {
            cy.inserirDescricao('teste')
        });
        it('E o usuario preencher o campo Interessado', () => {
            cy.inserirInteressado('teste')
        });
        it('E o usuario nao preencher o campo Valor', () => {
            cy.inserirValor('123').clear()
        });
        it('E o usuario preencher o campo Conta', () => {
            cy.inserirConta('Conta com movimentacao')
        });
        it('E o usuario clicar no botao “Salvar”', () => {
            cy.salvar()
        });
        it('Então o sistema exibe  duas mensagem de erros: ”Valor é obrigatório”, “Valor deve ser um número”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Valor é obrigatório”, “Valor deve ser um número')
        });
    })

    describe.only('Criar movimentação com valor com caracteres', () => {

        it('Dado que o usuario esteja logado', () => {
            cy.login('teste@desafio.com', '1234')
            cy.resetApp()
        });

        it('Quando o usuario clicar no link “Criar Movimentação”', () => {
            cy.acessarMovimentacao()
        });
        it('E o usuario preencher o campo Data de Movimentação', () => {
            
        });
        it('E o usuario preencher o campo Data de Pagamento', () => {
            
        });       
        it('E o usuario preencher o campo Descrição', () => {
            cy.inserirDescricao('teste')
        });
        it('E o usuario preencher o campo Interessado', () => {
            cy.inserirInteressado('teste')
        });     
        it('E o usuario preencher o campo Valor', () => {
            cy.inserirValor('#')
        });
        it('E o usuario preencher o campo Conta', () => {
            cy.inserirConta('Conta com movimentacao')
        });
        it('E o usuario clicar no botao “Salvar”', () => {
            cy.salvar()
        });
        it('Então o sistema exibe  uma mensagem de erro: ”Valor deve ser um número”', () => {
            cy.verificarMSG(loc.ALERT.MSG_ERRO, 'Valor deve ser um número')
        });
    })
})
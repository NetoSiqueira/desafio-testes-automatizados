import loc from './locators'

Cypress.Commands.add('acessarMovimentacao', () =>{
    cy.get(loc.MENU.MOVIMENTACAO).click()
})

Cypress.Commands.add('inserirDescricao', descricao =>{
    cy.get(loc.MOVIMENTO.DESCRICAO).type(descricao)
})

Cypress.Commands.add('inserirValor', valor =>{
    cy.get(loc.MOVIMENTO.VALOR).type(valor)
})

Cypress.Commands.add('inserirInteressado', int =>{
    cy.get(loc.MOVIMENTO.INTERESSADO).type(int)
})

Cypress.Commands.add('inserirConta', banco =>{
    cy.get(loc.MOVIMENTO.CONTA_MOV).select(banco)
})
Cypress.Commands.add('salvar', () =>{
    cy.get(loc.MOVIMENTO.BNT_MOV).click()
})    

Cypress.Commands.add('naoPreencherDataMov', () =>{
    cy.get(loc.MOVIMENTO.DATA_TRANFER).then(function($input){
        $input[0].setAttribute('value', 'Invalid date')
      })
    
})

Cypress.Commands.add('naoPreencherDataPag', () =>{
    cy.get(loc.MOVIMENTO.DATA_PAG).clear()
})
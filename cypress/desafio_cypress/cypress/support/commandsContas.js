import loc from './locators'


Cypress.Commands.add('acessarMenuConta', () =>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', conta =>{
    const dataHoraBrasil = new Date();
       // const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));
       cy.get(loc.CONTA.NOME).clear()
        cy.get(loc.CONTA.NOME).type(conta)
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
})

Cypress.Commands.add('naoPreencherConta', () =>{
    const dataHoraBrasil = new Date();
       // const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));
        cy.get(loc.CONTA.NOME).clear()
        cy.get(loc.CONTA.NOME).type("conta")
        cy.get(loc.CONTA.NOME).clear()
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
})

Cypress.Commands.add('editarConta', conta =>{
    cy.xpath(loc.CONTA.FN_XP_BTN_ALTERAR(conta)).click()

})


const locators = {

    LOGIN: {
        EMAIL: '[data-test=email]',
        SENHA: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    ALERT:{
        MSG_SUCESSO:'.toast-message',
        MSG_ERRO:'.toast-message'

    },
    MENU:{
        HOME:'[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]',
        NOVO_USUARIO:'[href="/registro"]'
    },
    CADASTRO:{
        NOME:'[placeholder="Nome"]',
        EMAIL:'[placeholder="Email"]',
        SENHA:'[placeholder="Senha"]',
        BTN:'.btn'
    },
    CONTA:{
        NOME: '[data-test=nome]',
        BTN_SALVAR_CONTA: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
    },
    MESSAGE: '.toast-message',
    MOVIMENTO:{
        DATA_TRANFER: '[data-test=data-transacao]',
        DATA_PAG:'[data-test=data-pagamento]',
        DESCRICAO: '#descricao',
        VALOR:'[data-test=valor]',
        INTERESSADO:'#envolvido',
        CONTA_MOV: '[data-test=conta]',
        BNT_MOV:'.btn-primary',
        BNT_STATUS: '[data-test=status]'
    },
    SALDO:{
        FN_XP_SALDO_CONTA: nome =>`//td[contains(., '${nome}')]/../td[2]`
    },
    EXTRATO:{
        FN_XP_REMOVER_ELEMENTO: conta=> `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`
    }



}

export default locators;
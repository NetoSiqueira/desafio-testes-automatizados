const locators = {

    LOGIN: {
        EMAIL: '#email',
        SENHA: '#senha',
        BTN_LOGIN: '.btn'
    },
    ALERT:{
        MSG_SUCESSO:'.alert-success',
        MSG_ERRO:'.alert-danger'

    },
    MENU:{
        HOME:'[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]',
        NOVO_USUARIO:'[href="/cadastro"]'
    },
    CADASTRO:{
        NOME:'#nome',
        EMAIL:'#email',
        SENHA:'#senha',
        BTN:'.btn'
    },
    CONTA:{
        NOME: '[data-test=nome]',
        BTN_SALVAR_CONTA: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
    },
    MESSAGE: '.toast-message',
    MOVIMENTO:{
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
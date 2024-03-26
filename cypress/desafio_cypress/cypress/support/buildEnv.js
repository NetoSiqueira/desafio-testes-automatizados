const buildEnv = () =>{
    cy.server()

    cy.route({
        method: 'POST',
        url:'/signin',
        response:{
            id: 1000,
            nome: 'Usuario falso',
            token: 'Uma string muito grande que nao ser deveria ser aceita'
        }
    }).as('signin')

    cy.route({
        method:'GET',
        url: '/saldo',
        response: [{
            conta_id: 999,
            conta: "Carteira",
            saldo: "100.00"
        },
        {
            conta_id: 9909,
            conta: "Conta falsa 2",
            saldo: "10000000000000.00"
        }
        ]
    }).as('saldo')

    cy.route({
        method: 'GET',
        url:'/contas',
        response:[
         {
             id: 1,
             nome: "Carteira",
             visivel: true,
             usuario_id: 1
         },
         {
             id: 2,
             nome: "bancos",
             visivel: true,
             usuario_id: 1
         }
         ] 
     }).as('contas')

     cy.route({
        method: 'GET',
        url:'/extrato/**',
        response:[
            {
                "conta": "Conta para movimentacoes",
                "id": 1885515,
                "descricao": "Movimentacao para exclusao",
                "envolvido": "AAA",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "-1500.00",
                "status": true,
                "conta_id": 2011569,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta com movimentacao",
                "id": 1885516,
                "descricao": "Movimentacao de conta",
                "envolvido": "BBB",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "-1500.00",
                "status": true,
                "conta_id": 2011570,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 1885517,
                "descricao": "Movimentacao 1, calculo saldo",
                "envolvido": "CCC",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "3500.00",
                "status": false,
                "conta_id": 2011571,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 1885518,
                "descricao": "Movimentacao 2, calculo saldo",
                "envolvido": "DDD",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "-1000.00",
                "status": true,
                "conta_id": 2011571,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para saldo",
                "id": 1885519,
                "descricao": "Movimentacao 3, calculo saldo",
                "envolvido": "EEE",
                "observacao": null,
                "tipo": "REC",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "1534.00",
                "status": true,
                "conta_id": 2011571,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            },
            {
                "conta": "Conta para extrato",
                "id": 1885520,
                "descricao": "Movimentacao para extrato",
                "envolvido": "FFF",
                "observacao": null,
                "tipo": "DESP",
                "data_transacao": "2024-01-10T03:00:00.000Z",
                "data_pagamento": "2024-01-10T03:00:00.000Z",
                "valor": "-220.00",
                "status": true,
                "conta_id": 2011572,
                "usuario_id": 35269,
                "transferencia_id": null,
                "parcelamento_id": null
            }
        ]
     })
}

export default buildEnv
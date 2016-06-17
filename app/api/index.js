var db = require('../../config/database');

var api = {}

api.listaPacotes = function(req, res) {
    console.log('listaPacotes');
     res.json([
        {  
            codigo: 1,
            nome: 'Pacote Bronze',
            qtd: 20,
            valor: 70.00
        },
        {
            codigo: 1,
            nome: 'Pacote Prata',
            qtd: 40,
            valor: 80.00
        },
        {
            codigo: 1,
            nome: 'Pacote Ouro',
            qtd: 60,
            valor: 90.00
        }
    ]);
};

api.listaReservas = function(req, res) {
    console.log('listaReservas');
     res.json([
        {  
            codigo: 1,
            data: '17/02/2016',
            local: 'Brasília Loja 01',
            hora: '18:00',
            ativa: false
        },
        {
            codigo: 2,
            data: '19/05/2016',
            local: 'Brasília Loja 02',
            hora: '10:00',
            ativa: false
        },
        {
            codigo: 3,
            data: '26/06/2016',
            local: 'Brasília Loja 01',
            hora: '18:00',
            ativa: true
        }
    ]);
};

api.listaSalas = function(req, res) {
    console.log('listaSalas');
    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.iniciaBanco = function(req, res) {

   var cidades = [
        {
            codigo: 1, 
            nome: 'Brasília',
            lojas : [
                {
                    codigo: 1, 
                    nome: 'Loja 01',
                    posicoes : [
                            {
                                codigo: 1, 
                                nome: 'Individuais', 
                                qtd: 14
                            },
                            {
                                codigo: 2, 
                                nome: 'Para 2 pessoas', 
                                qtd: 5
                            },
                            {
                                codigo: 3, 
                                nome: 'Para 4 pessoas', 
                                qtd: 2
                            }
                    ]
                },
                {
                    codigo: 2, 
                    nome: 'Loja 02',
                    posicoes : [
                            {
                                codigo: 1, 
                                nome: 'Individuais', 
                                qtd: 6
                            },
                            {
                                codigo: 2, 
                                nome: 'Para 2 pessoas', 
                                qtd: 1
                            },
                            {
                                codigo: 3, 
                                nome: 'Para 4 pessoas', 
                                qtd: 4
                            }
                    ]
                }
            ]
        },
        {
            codigo: 2, 
            nome: 'Taguatinga',
            lojas : [
                {
                    codigo: 3, 
                    nome: 'Loja 03',
                    posicoes : [
                            {
                                codigo: 1, 
                                nome: 'Individuais', 
                                qtd: 7
                            },
                            {
                                codigo: 2, 
                                nome: 'Para 2 pessoas', 
                                qtd: 3
                            },
                            {
                                codigo: 3, 
                                nome: 'Para 4 pessoas', 
                                qtd: 1
                            }
                    ]
                }
            ]
        }
   ];
  
    db.insert(cidades, function(err, newDoc) {
        
        console.log('db.insert(cidades)');

        if(err) return console.log(err);
        console.log('db.insert(cidades) com sucesso: ');
        console.log(newDoc);
        //res.json(newDoc);
    });  

};

api.listaCidades = function(req, res) {
    console.log('listaCidades');
    db.find({}).sort({codigo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};


module.exports = api;

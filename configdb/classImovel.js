const sitemodel = require('./schemaImoveis');
const connection = require('./connections');
const mongoose = require('mongoose');

const classImovel = {
    start: async () => {
        connection();
    },
    add: async (dt) => {
        try {
            const dadosimoveis = new sitemodel({
                nome: dt.nome,
                valor: dt.valor,
                urlimovel: dt.urlimovel,
                codigo: dt.codigo,
                detalhesImovel: dt.detalhesImovel,
            });
            let dadosdeconsulta = await sitemodel.find({ codigo: dadosimoveis.codigo }).countDocuments();
            if (dadosdeconsulta === 0) {
                await dadosimoveis.save();
            } else {
                console.log('Dados já cadastrados!')
            }

        } catch (error) {
            console.log('Não foi salvar dados! => ' + error)
        }
    },
    contaregistros: async () => {
        try {
            let nrdados = await sitemodel.find({}).countDocuments();
        } catch (error) {
            console.log('Deu Pau!=> ' + error)
        }
    },
    consulta: async (dado) => {
        try {
            let dadosdeconsulta = await sitemodel.find({ codigo: `${dado}` }).countDocuments();
            return dadosdeconsulta
        } catch (error) {
            console.log('Deu Pau!=> ' + error)
        }
    },
    close: async () => {
        mongoose.connection.close();
    }
};

module.exports = classImovel;
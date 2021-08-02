const classImovel = require('./classImovel');

let dados = ({
    nome: 'Blumenau - Apartamento Padrão - Do Salto',
    valor: 'R$ 285.000',
    urlimovel: 'https://sc.olx.com.br/norte-de-santa-catarina/imoveis/blumenau-apartamento-padrao-do-salto-892788397',
    codigo: '892788397',
    detalhesImovel: [
        'Categoria : Apartamentos',
        'Tipo : Venda - apartamento padrão',
        'Área útil : 0m²',
        'Quartos : 1',
        'Banheiros : 0',
        'Vagas na garagem : 0',
        'CEP : 89040002',
        'Município : Blumenau',
        'Bairro : Velha',
        'Logradouro : Rua dos Caçadores - de 971 a 1751 - lado ímpar'
    ]
})

async function main(){
    await classImovel.start();
    await classImovel.add(dados);
    await classImovel.close();
}

main();
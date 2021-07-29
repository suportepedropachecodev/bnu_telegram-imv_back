//Extrai dados individuais de pagina

const puppeteer = require('puppeteer');

const urlalvo = 
"https://sc.olx.com.br/norte-de-santa-catarina/imoveis/apartamento-com-2-dormitorios-a-venda-70-m-por-r-185-000-00-itoupava-central-blumen-835302594";

let detalhesImovel = [];

const wspg = async () => {

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        //headless: false,
    });
    const page = await browser.newPage();

    await page.goto(urlalvo);
    await page.waitForTimeout(3000);
    const nome = await page.$eval('.sc-45jt43-0.eCghYu.sc-ifAKCX.cmFKIN', (el) => el.textContent);
    const valor = await page.$eval('.sc-1wimjbb-0.JzEH.sc-ifAKCX.cmFKIN', (el) => el.textContent);
    const codigobruto = await page.$eval('.sc-16iz3i7-0.qJvUT.sc-ifAKCX.fizSrB', (el) => el.textContent);
    const codigo = codigobruto.replace(/\D/gim, '');//Limpa string de codigo pegando apenas numeros 
    const urlimovel = urlalvo;
    const detalhesArray = await page.$$('.duvuxf-0.h3us20-0.jyICCp');
    for (let detalhesElement of detalhesArray) {
        let detalhesImv = await detalhesElement.$eval('.sc-hmzhuo.sc-1f2ug0x-3.ONRJp.sc-jTzLTM.iwtnNi', element => element.innerText);
        const detalhes = await detalhesImv.replace('\n', ' : ');
        detalhesImovel.push(detalhes)
    }

    await console.log({ nome, valor, urlimovel, codigo, detalhesImovel });



    await browser.close();
};
wspg();

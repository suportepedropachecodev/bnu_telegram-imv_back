//Pega os links das paginas dos imoveis


const puppeteer = require("puppeteer");

const urlalvo =
    "https://sc.olx.com.br/norte-de-santa-catarina/regiao-do-vale-do-itajai/blumenau/imoveis/venda/apartamentos";


async function linkspg(lkpesquisa) {
    const dados = [];
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        //defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(lkpesquisa);

    const options = await page.$$eval(".sc-1fcmfeb-1.kntIvV > li >a", (opts) =>
        opts.map((option) => option.attributes[6].nodeValue)
    );
    await browser.close();

    await options.map((lnk) => {
        const olnk = lnk
        dados.push(olnk);
    })

    //await console.log(dados);
    return dados

}

//linkimoveis(urlalvo);
module.exports=linkspg;

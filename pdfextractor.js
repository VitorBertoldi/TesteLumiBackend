const fs = require('fs');
const pdfParse = require('pdf-parse');
const sequelize = require('./config/database'); 
const Fatura = require('./models/fatura'); 
const path = require('path');

async function extractPdfData(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);

    try {
        const data = await pdfParse(dataBuffer);
        const text = data.text;
        const lines = text.split('\n');

        const numClienteIndex = lines.findIndex(line => /N[ºoO]\s+DO\s+CLIENTE/i.test(line));
        const numCliente = numClienteIndex !== -1 ? lines[numClienteIndex + 1].trim().match(/\d+/)?.[0] : null;

        const mesReferenciaIndex = lines.findIndex(line => /Referente\s*a/i.test(line));
        const mesReferencia = mesReferenciaIndex !== -1 ? lines[mesReferenciaIndex + 1].trim().match(/[A-Z]+\/\d{4}/)?.[0] : null;

        if (!numCliente || !mesReferencia) {
            console.log(`Número do cliente ou mês de referência não encontrados no arquivo: ${pdfPath}`);
            return;
        }

        const jaExiste = await faturaJaExiste(numCliente, mesReferencia);
        if (jaExiste) {
            console.log(`Fatura já existente no banco de dados: Cliente ${numCliente}, Mês ${mesReferencia}`);
            return;  
        }

        const energiaEletricaMatch = text.match(/Energia Elétrica\s*kWh\s+([\d,.]+)\s+[\d,.]+\s+([\d,.]+)/i);
        const energiaEletricaKwh = energiaEletricaMatch ? energiaEletricaMatch[1] : null;
        const energiaEletricaValor = energiaEletricaMatch ? energiaEletricaMatch[2] : null;

        const energiaSCEEEICMSMatch = text.match(/Energia\s*SCEE\s*s\/\s*ICMS\s*kWh\s*([\d,.]+)\s*[\d,.]+\s*([-]?[\d,.]+)/i);
        const energiaSCEEEKwh = energiaSCEEEICMSMatch ? energiaSCEEEICMSMatch[1] : null;
        const energiaSCEEEValor = energiaSCEEEICMSMatch ? energiaSCEEEICMSMatch[2] : null;

        const energiaCompensadaGDIMatch = text.match(/Energia compensada GD I\s*kWh\s*([\d,.]+)\s*[\d,.]+\s*([-]?[\d,.]+)/i);
        const energiaCompensadaGDIkWh = energiaCompensadaGDIMatch ? energiaCompensadaGDIMatch[1] : null;
        const energiaCompensadaGDIValor = energiaCompensadaGDIMatch ? energiaCompensadaGDIMatch[2] : null;

        const contribIlumPublicaMatch = text.match(/Contrib Ilum Publica Municipal\s*([\d,.]+)/i);
        const contribIlumPublicaValor = contribIlumPublicaMatch ? contribIlumPublicaMatch[1] : null;

        const convertToDecimal = (value) => {
            if (value) {
                return parseFloat(value.replace(/\./g, '').replace(',', '.').trim());
            }
            return null;
        };

        await Fatura.create({
            numero_cliente: numCliente,
            mes_referencia: mesReferencia,
            energia_eletrica_kwh: energiaEletricaKwh ? parseInt(energiaEletricaKwh.replace('.', ''), 10) : null,
            energia_eletrica_valor: convertToDecimal(energiaEletricaValor),
            energia_sceee_kwh: energiaSCEEEKwh ? parseInt(energiaSCEEEKwh.replace('.', ''), 10) : null,
            energia_sceee_valor: convertToDecimal(energiaSCEEEValor),
            energia_compensada_kwh: energiaCompensadaGDIkWh ? parseInt(energiaCompensadaGDIkWh.replace('.', ''), 10) : null,
            energia_compensada_valor: convertToDecimal(energiaCompensadaGDIValor),
            contrib_ilum_publica_valor: convertToDecimal(contribIlumPublicaValor),
        });

        console.log('Dados inseridos com sucesso no banco de dados!');

    } catch (error) {
        console.error('Erro ao processar o PDF:', error);
    }
}

async function faturaJaExiste(numero_cliente, mes_referencia) {
    const faturaExistente = await Fatura.findOne({
        where: {
            numero_cliente: numero_cliente,
            mes_referencia: mes_referencia
        }
    });
    return !!faturaExistente;  
}

async function processAllPdfs() {
    const pdfDirectory = path.join(__dirname, 'pdfs');

    fs.readdir(pdfDirectory, async (err, files) => {
        if (err) {
            console.error('Erro ao ler a pasta de PDFs:', err);
            return;
        }

        const pdfFiles = files.filter(file => file.endsWith('.pdf'));

        for (const pdfFile of pdfFiles) {
            const pdfPath = path.join(pdfDirectory, pdfFile);
            await extractPdfData(pdfPath);  
        }

        console.log('Processamento completo.');
    });
}

module.exports = processAllPdfs;

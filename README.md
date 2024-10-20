# API para Extração e Gerenciamento de Faturas de Energia Elétrica

## Descrição

Esta API foi desenvolvida para extrair dados de faturas de energia elétrica, armazená-los em um banco de dados PostgreSQL e disponibilizá-los para visualização através de uma aplicação web.

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- PostgreSQL
- Sequelize (ORM)
- pdf-parse (para extração de dados dos PDFs)

## Bibliotecas Utilizadas

- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js que facilita a manipulação de dados em bancos SQL.
- **pdf-parse**: Biblioteca para manipulação de arquivos PDF.
- **dotenv**: Carregamento de variáveis de ambiente de um arquivo `.env`.
- **Chart.js**: Biblioteca para gráficos.
- **Axios**: Biblioteca para fazer requisições HTTP.

## Instalação das Bibliotecas

Para instalar as bibliotecas mencionadas, execute os seguintes comandos:

```bash
npm install express sequelize pdf-parse dotenv chart.js axios

### Funcionalidades:

- Extração de dados relevantes das faturas em PDF.
- Armazenamento estruturado dos dados em um banco de dados PostgreSQL.
- Visualização dos dados em uma aplicação web com gráficos e cards.

## Tecnologias Utilizadas

- **Front-end:** React.js
- **Back-end:** Node.js (Express)
- **Banco de Dados:** PostgreSQL
- **Bibliotecas:** pdf-parse, Chart.js, Axios

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
## Execução

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

A aplicação será iniciada e estará disponível em http://localhost:3000 por padrão. Você pode abrir essa URL em um navegador para ver a aplicação em funcionamento.
```bash
node index.js

## Uso da Aplicação

### Dashboard:
- Visualize gráficos que mostram o consumo de energia e valores financeiros.
- Veja os totais acumulados de energia consumida e valor compensado.

### Biblioteca de Faturas:
- Selecione um número do cliente e visualize as faturas correspondentes.
- Realize o download das faturas de energia elétrica.

### Filtros:
- Utilize filtros para pesquisa por número do cliente e período de análise.



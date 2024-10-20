# Projeto de Extração e Visualização de Faturas de Energia Elétrica

Este projeto consiste em uma aplicação web para extrair, armazenar e visualizar dados de faturas de energia elétrica. A aplicação é composta por um back-end em Node.js e um front-end em React.

## Índice

- [Descrição do Desafio](#descrição-do-desafio)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Uso da Aplicação](#uso-da-aplicação)
- [Estrutura da Aplicação](#estrutura-da-aplicação)
- [Testes Automatizados](#testes-automatizados)
- [Envio e Hospedagem](#envio-e-hospedagem)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição do Desafio

O objetivo deste projeto é desenvolver um código que extrai dados relevantes de faturas de energia elétrica, organiza esses dados em um banco de dados PostgreSQL e os apresenta em uma aplicação web através de uma API.

### Funcionalidades:

- Extração de dados relevantes das faturas em PDF.
- Armazenamento estruturado dos dados em um banco de dados PostgreSQL.
- Visualização dos dados em uma aplicação web com gráficos e cards.

## Tecnologias Utilizadas

- **Front-end:** React.js
- **Back-end:** Node.js (Express)
- **Banco de Dados:** PostgreSQL
- **Bibliotecas:** pdf-lib, Chart.js, Axios

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
npm start

## Uso da Aplicação

### Dashboard:
- Visualize gráficos que mostram o consumo de energia e valores financeiros.
- Veja os totais acumulados de energia consumida e valor compensado.

### Biblioteca de Faturas:
- Selecione um número do cliente e visualize as faturas correspondentes.
- Realize o download das faturas de energia elétrica.

### Filtros:
- Utilize filtros para pesquisa por número do cliente e período de análise.



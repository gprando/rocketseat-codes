<h1 align="center">
  <img src="./frontend/src/assets/logo.svg" alt="GoFinances" width="400">
<br>
</h1>

<p align="center"> 🚀 GoFinances: Aplicação de controle financeiro, desenvolvida duranto o bootcamp GoStack.

<p align="center">
  <a aria-label="Prando" href="https://github.com/gprando/">
    <img src="https://img.shields.io/github/followers/gprando?style=social"></img>
  </a>
    <img src="https://img.shields.io/github/last-commit/gprando/GoFinances"></img>
    <img src="https://img.shields.io/github/languages/count/gprando/GoFinances"></img>
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## 🚀 Tecnologias 

Tecnologias utilizadas para o desenvolvimento

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Projeto

GoFinances é um projeto de controle financeiro, onde você tem a possibilidade de importar um csv com todos as suas receitas e despesas, e ter um cálculo automático do seu saldo.

## Getting started

<h1 align="center"><img align="center" src="./frontend/src/assets/gofinances.gif" alt="GoFinances gif"  width="500"></img></h1>

## Instalação - Projeto

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Banco de dados [PostgreSQL](https://www.postgresql.org/)

**Clone o projeto em seu computador.**

```bash
git clone https://github.com/gprando/GoFinances
```

## Backend
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento) execute:

*Obs: Configure sua base de dados dentro do ormconfig.json dentro da pasta backend*

```bash
cd backend
yarn 
yarn dev:server
```
### Insomnia 
Para testar a API do GoFinances, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique no botão a baixo para importar o workspace.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoFinances&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fgprando%2FGoFinances%2Fmaster%2Fbackend%2FgofinancesInsomnia.json)

### Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
yarn 
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto.  

## 🤔 Como contribuir

Se quiser contribuir para esse repositório aqui, seja corrigindo algum problema, adicionando comentários ou melhorando a documentação, você pode seguir esse tutorial abaixo:

- Faça [um fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) desse repositório;
- Entre no seu perfil no GitHub e faça um clone do repositório que você fez um *fork*;
- Crie uma *branch* com a sua alteração: `git checkout -b minha-alteracao`;
- Faça as alterações necessárias no código ou na documentação;
- Faça *commit* das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça *push* para a sua *branch*: `git push origin minha-alteracao`;
- Agora é só abrir a sua *pull request* no repositório que você fez o *fork*;

Depois que o *merge* da sua *pull request* for feito, você pode deletar a sua *branch*.

## :memo: Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes

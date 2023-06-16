## Sobre

Projeto final da Rocketseat, se trata de uma aplicação de um menu interativo para restaurantes, contando com uma versão mobile e desktop, além disso, possui dois acessos diferentes: _user_ e _admin_.

O cadastro de novos usuários pode ser realizado a qualquer momento ao utilizar a tela de cadastro, enquanto que para cadastrar um novo admin é preciso entrar em contato com o desenvolvedor para que o mesmo seja realizado de forma manual, impedindo que demais usuários possam se cadastrar como administradores e editar os pratos existentes.

## Tecnologias

- Node.js
- Biblioteca Express
- Knex como query builder
- SQLite como banco de dados

## Funcionalidades

O **user** pode visualizar todos os pratos cadastrados no sistema, e ao clicar em visualizar um prato, ele será direcionado para uma tela mostrando detalhadamente as informações do prato selecionado.

O **admin** pode realizar algumas funções dentro da aplicação, como visualizar os pratos, editá-los, excluí-los e criar um novo prato.

## Utilizando a aplicação

1. Clonar a aplicação
   git clone https://github.com/lucasdonay/desafio-final-explorer/tree/main/back-end
2. Instalar as dependências
   `npm install`

3. Iniciar a aplicação
   `npm run dev`

4. Utilizando o Insomnia, Postman ou outro software de requisições HTTP do seu gosto, configure a baseURL para: **http://localhost:3000**
   - Caso queira alterar a PORT, acesse o arquivo src/server.js e altere a linha 34: `const  PORT = 3000;`

## Acessos

**User**

_E-mail:_ user@email.com

_Senha:_ 123

**Admin**

_E-mail:_ admin@email.com

_Senha:_ 123

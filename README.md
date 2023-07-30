# personal_contact_list-API

Esta é uma API que tem como finalidade simular uma agenda de contatos de um usuário. A API permite o cadastro de um usuário novo e que esse usuário cadastre quantos contatos na sua agenda quiser. 

## Tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- TypeORM
- PostgreSQL

## Iniciando a aplicação

Siga os passos abaixo para poder rodar a aplicação no seu servidor local:

1. Instale o Node.js

2. Rode o comando abaixo para instalar todas as dependencias:

```
npm install
```

4. Crie um arquivo chamado `.env` na raiz do projeto, fora da pasta src e defina as variaveis de ambiente para se conectar ao seu banco de dados e sua chave secreta. 
certifique-se de ter criado anteriormente o banco de dados que vai ser utilizado.

```
DATABASE_URL= postgres://user:password@host:port/db
SECRET_KEY= string
```

5. Rode o comando abaixo para iniciar o servidor:

```
npm run dev
```
## Endpoints
<br/>

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| GET | /users/:id                    | buscar usuário por id                             | somente dono da conta 
| POST| /users                        | cadastrar um usuário                              | qualquer usuário
|PATCH| /users/:id/                   | atualizar informações do usuário                  | somente dono da conta
|DELETE|/users/:id/                   | excluir usuário                                   | somente dono da conta

<br/>
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /login                     | iniciar sessão                                    | somente usuário ja criado no banco 

<br/>
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| GET | /contacts                     | buscar todos contatos do usuário determinado      | somente dono da conta 
| POST| /contacts                     | cadastrar um contato para usuário determinado     | somente dono da conta
|PATCH| /contacts/:id/                | atualizar informações do contato                  | somente dono da conta
|DELETE|/contacts/:id/                | excluir contato                                   | somente dono da conta


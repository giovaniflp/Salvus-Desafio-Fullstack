
# Salvus Desafio Técnico Fullstack - ExpressJs + ReactJs + NextJs + MySQL

Projeto feito para uma vaga de Desenvolvedor Fullstack disponibilizado pela Salvus.




## Relacionados

Deploy da aplicação

[Front-end React (Vercel)](https://reactjs-salvus-deploy.vercel.app/)

[Back-end ExpressJs (Heroku)](https://salvus-backend-a064a9dafad6.herokuapp.com/)

[Banco de dados MySQL (Railway)](https://railway.app/)


## Demonstração

![Demonstração](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW5kM3AweDJraHhtNno4M2Ntd2xyYjE4N3o0OTQ1Mzl2NHVjdjZkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5QK1OU0zcOH8VNwFYC/giphy.gif)
## Rodando localmente

#### Pré Requisito - Possuir o Docker ou Docker Desktop instalado(s) na máquina

Clone o projeto

```bash
  git clone https://github.com/giovaniflp/Salvus-Desafio-Fullstack.git
```

Entre no diretório do backend

```bash
  cd .\Salvus-Desafio-Fullstack\expressjs
```

Instale as dependências

```bash
  npm install
```

Inicie o contêiner

```bash
  docker-compose up --build
```

#### Abra outro terminal

Entre no diretório do frontend

```bash
  cd .\Salvus-Desafio-Fullstack\reactjs
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor do frontend

```bash
  npm run dev
```
## Documentação da API

#### Retorna 6 produtos dependendo da página

```http
  GET /produto?page=PAGE
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `PAGE` | `Número inteiro` | Retorna 6 produtos por página, substituir PAGE pelo número da página. Ex: /produto?page=1 |

#### Retorna todos os produtos

```http
  GET /produto/allProducts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Sem parâmetros`      | `Array de objetos` | Retorna todos os produtos salvos no banco de dados |

#### Registra um novo produto

```http
  POST /produto
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome, preco, descricao`      | `Objeto` | Registra um produto no banco de dados |

Exemplo:
{
    "nome":"Pomada",
    "preco":20.53,
    "descricao": "Para relaxar os músculos"
}

#### Retorna o produto com o ID requisitado

```http
  GET /produto/ID
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `ID`      | `Número` | Retorna o produto de acordo com o Id enviado do front-end. Ex: /produto/1 |

#### Edita dados de um produto

```http
  PATCH /produto/ID
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `ID, nome, preco, descricao`      | `Número e Objeto` | Edita o produto de acordo com o Id e as novas informações enviadas do front-end. Ex: /produto/1 |

Exemplo:
{
    "preco":1.99
}

#### Deleta um Produto

```http
  DELETE /produto/ID
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `ID`      | `Número` | Apaga um produto do banco de dados de acordo com o Id enviado do front-end. Ex: /produto/5 |

## Funcionalidades

- CRUD completo com a entidade Produto
- Feedbacks visuais
- Responsividade para todas as telas

## Diferenciais
- Controle de formulário
- Uso de contêiner com Docker
- Ordenação crescente e decrescente
- Variáveis de ambiente para segurança
- Paginação para evitar sobrecarga do servidor


## Stack utilizada

**Front-end:** React, Tailwindcss, Shadcn/ui e NextJs

**Back-end:** Node, Express, MySQL e Docker


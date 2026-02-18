# Mini LMS API

API REST desenvolvida com Node.js + TypeScript + SQLite, construída sem uso de frameworks como Express, com o objetivo de demonstrar domínio de fundamentos de backend, arquitetura HTTP e manipulação direta de banco de dados.

Este projeto simula um sistema simples de gerenciamento de cursos (LMS – Learning Management System) com operações completas de CRUD.


## Tecnologias Utilizadas

* Node.js (HTTP nativo)
* TypeScript
* SQLite
* Arquitetura sem framework
* Router customizado
* JSON como padrão de comunicação


## Este projeto foi desenvolvido com foco em:

* Implementação de um router customizado com suporte a parâmetros dinâmicos
* Modelagem relacional com SQLite
* Construção completa de um CRUD RESTful
* Organização modular de backend


## Estrutura do projeto
core/
 ├── http/
 │    ├── custom-request.ts
 │    └── custom-response.ts
 │
 ├── core.ts
 ├── database.ts
 ├── router.ts
 │
client.mjs
index.ts
lms.sqlite

## Modelo de Dados

### Curso
* id
* slug (único)
* nome
* descricao

### Aula
* id
* slug (único por curso)
* nome
* curso_id (FK)

### Relacionamento
* Um Curso possui várias Aulas
* Uma Aula pertence a um único Curso
* Integridade garantida por Foreign Key

## Rotas da API

### Cursos
`POST /cursos - 
GET /cursos -
GET /cursos/:slug -
PUT /cursos/:slug -
DELETE /cursos/:slug`

### Aulas
`POST /cursos/:cursoSlug/aulas -
GET /cursos/:cursoSlug/aulas -
GET /cursos/:cursoSlug/aulas/:aulaSlug -
PUT /cursos/:cursoSlug/aulas/:aulaSlug -
DELETE /cursos/:cursoSlug/aulas/:aulaSlug -
DELETE /cursos/:cursoSlug/aulas`

## Exemplo de Requisição

### Criar Curso
#### POST /cursos
```
{
  "slug": "javascript",
  "nome": "JavaScript",
  "descricao": "Curso completo de JavaScript"
}
```
### Criar Aula
#### POST /cursos/javascript/aulas
```
{
  "slug": "variaveis",
  "nome": "Variáveis"
}
```

















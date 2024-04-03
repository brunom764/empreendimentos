# Enterprise

Enterprise - Uma aplicação full-stack com next js e express js para fazer o CRUD de empresas. Nesssa aplicação é possível cadastrar, editar, deletar e listar empresas com seus respectivos endereços.


# Features

* Usuários podem acessar lista de empresas cadastradas.
* Usários podem buscar empresas por nome.
* Usuários podem cadastrar empresas.
* Usuários podem editar empresas.
* Usuários podem deletar empresas.


## Contributing

Contribuições para o Parrot são muito bem-vindas! Se você gostaria de contribuir, siga estas instruções:

1. Faça um fork do repositório;
2. Crie sua branch de funcionalidade (`git checkout -b feature/SuaFeature`);
3. Adicione suas alterações (`git add .`);
3. Faça commits das suas alterações (`git commit -m 'Adicionando uma funcionalidade'`);
4. Faça push para a branch (`git push origin feature/SuaFeature`);
5. Crie um novo Pull Request.

# Frontend

A aplicação foi desenvolvida com Next.js, React.js,  TypeScript, Styled-components, materialUI, React-hook form, yup e Axios. Ela é dividade em 3 camadas: Pages, Components e Services.
 
  - Pages: São as páginas da aplicação( Home, Register e update/[id]).
  - Components: São os componentes que são utilizados nas páginas.
  - Services: São os serviços que fazem as requisições para a API por meio da classe HTTP Handler.

Além disso, a aplicação possui as seguintes pastas:
    - Hooks: São hooks customizados.
    - Utils: São funções, constantes ou tipos utilitários.
    - Styles: São estilos globais da aplicação.

## Frontend setup
``` 
  cd client

```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

# Backend

A aplicação foi desenvolvida com Node js, Express.js, Prisma, postegreSQL e TypeScript. Ela é dividade em 3 camadas: Controllers, Services e Repositories.
 
  - Controllers: São os controladores que recebem as requisições e enviam as respostas.
  - Services: São os serviços que fazem a lógica de negócio.
  - Repositories: São os repositórios que fazem as operações no banco de dados.

Além disso, a aplicação possui as seguintes pastas:
  - Domain/entities: São as entidades da aplicação.
  - Prisma: É um ORM que faz a conexão com o banco de dados.
  - Routes: São as rotas da aplicação.
  - Schemas: São esquemas de validação de dados.

Os dados são armazenados em um banco de dados PostgreSQL.

##  Backend setup
``` 
  cd api

```

```
npm install
```

## Prisma setup
```
    npx prisma db push
```

### Compiles and hot-reloads for development
```
npm run dev
```

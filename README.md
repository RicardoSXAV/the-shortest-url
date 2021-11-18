## Rotas disponíveis

### Encode

```
POST em http://localhost:5000/url/encode
```

* Recebe um JSON contendo ```url```.
* Retorna um JSON contendo ```shortUrl```.

### Decode

```
POST em http://localhost:5000/url/decode
```

* Recebe um JSON contendo ```url```.
* Retorna um JSON contendo ```originalUrl```.

## Rodando a aplicação

1. Clone o repositório na sua máquina usando o Git.

```
git clone https://github.com/RicardoSXAV/the-shortest-url
```

2. Instale as dependências usando NPM ou Yarn.

```
npm install
yarn install
```

3. Adicione um arquivo .env na raiz da pasta para colocar as informações do banco de dados.

```env
DATABASE_URL="INSIRA A URL AQUI"
```

* Para fazer a aplicação, foi utilizado o Heroku Postgres e, por isso, a conexão com o banco de dados foi por URL. 
Caso for rodar o banco de dados na sua máquina, é necessário mudar o arquivo ```src/database/config.ts``` e o ```.env```

```Typescript
// config.ts

require("dotenv").config();
import { Sequelize } from "sequelize";

const name = process.env.DATABASE_NAME as string;
const user = process.env.DATABASE_USER as string;
const password = process.env.DATABASE_PASSWORD as string;

const sequelize = new Sequelize(name, user, password, {
  host: 'localhost',
  dialect: /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

export default sequelize;

```

* Em dialect, você consegue usar o banco de dados de sua preferência.

```env
# .env

DATABASE_NAME=""
DATABASE_USER=""
DATABASE_PASSWORD=""
```

4. Depois de configurar o banco de dados, use o NPM ou Yarn para iniciar a aplicação.
```
npm run dev
yarn dev
```

* O servidor irá iniciar em http://localhost:5000.

## Testes

* Para conseguir rodar o comando de testes sem erros, é necessário fazer uma alteração no arquivo ```src/database/config.ts```:

```Typescript
// config.ts

require("dotenv").config();
import { Sequelize } from "sequelize";

const testEnv = process.env.NODE_ENV;

const sequelize = new Sequelize({
  dialect: testEnv === "test" ? "sqlite" : "postgres",
  storage: testEnv === "test" ? "./__tests__/database.sqlite" : "",
});

export default sequelize;
```

* Depois de alterar o arquivo, só rodar o comando de testes:

```
npm run test
yarn test
```

# Boas-vindas ao projeto Car Shop!

# Contexto
O `Car Shop` é um site para venda de veículos, podendo cadastrar, deletar, alterar, procurar um veículo pelo ID, listar todos os veículos e etc.

## Técnologias usadas

Princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. O projeto foi feito utilizando o banco de dados `MongoDB`.

# Orientações

<details>
  <summary><strong> 👀 Instalando Dependências e Executando Aplicação </strong></summary><br />

  - Basta rodar o comando `npm install` na pasta raiz do projeto para instalar todas as suas dependencias;

<summary>
    <strong> 🐳 Como subir o banco do MongoDB usando Docker</strong>
  </summary><br>

  Caso não tenha o MongoDB instalado em sua máquina e deseje usar o Docker, é só seguir os passos a seguir:

  1. Baixe a imagem do MongoDB:

  ```sh
  docker pull mongo
  ```

  2. Crie o contêiner do MongoDB:

  ```sh
  docker run --name <nome-do-container> -p 27017:27017 -d mongo
  ```

  3. Confira se o contêiner está rodando:

  ```sh
  docker ps
  ```
  
  <summary>
    <strong>🐳 Rodando no Docker vs Localmente</strong>
  </summary><br>

  ## Docker

  > Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it car_shop bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  <img src="images/remote-container.png" width="800px" >

  ## Localmente

  > Instale as dependências com `npm install`

  ✨ Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  ✨ Versão do `node` utilizada: 16.

</details>

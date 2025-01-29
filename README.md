# Fact sheet

Projeto: mobiauto-fipe<br>
Funcionalidade: Cotação de valor de carros

## Estrutura
```
📁 src
  ├─ 📁 api
  |  └─ fipe
  |     └─ Configuração da API de consumo e endpoints disponíveis
  ├─ 📁 components
  |     └─ Componentes do MUI _"wrapped"_
  ├─ 📁 hooks
  |     └─ Hooks para a manipulação da stores
  ├─ 📁 lib
  |     ├─ exercises
  |     |  └─ Arquivos com as resoluções do exercícios propostos
  |     └─ mui
  |        └─ Configuração do tema com MUI 
  ├─ 📁 pages
  |     └─ Componentes de páginas
  ├─ 📁 store
  |     ├─ slices
        |  └─ Definição das _slices_ (estados) a serem utilizados na store  
        └─ store
           └─ Definição da store global
```
- Docs Relevantes

  - <https://react.dev/reference/react>
  - <https://redux-toolkit.js.org/introduction/getting-started>
  - <https://redux-toolkit.js.org/rtk-query/overview>
  - <https://reactrouter.com/home>
  - <https://mui.com/material-ui/getting-started/>



## Desenvolvimento

- Requisitos:

  - [npm](https://www.npmjs.com/)

- Instalar dependências:

  ```bash
  npm i
  ```
- Executar runtime de desenvolvimento:

  ```bash
  npm run dev
  ```

- Build de produção:

  ```bash
  npm run build
  ```
    
- Executar exercícios:

  ```bash
  npm run exercises
  ```
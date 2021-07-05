# Algumas anotações para o curso de React + Typescript

[Ementa do curso](https://media.discordapp.net/attachments/831974152667398214/852264633184157746/unknown.png)

---

### Aula 1: preparando o ambiente e criando o projeto

* Mostra documentação do [React](https://pt-br.reactjs.org/) e do [TypeScript](https://www.typescriptlang.org/) - Explicação do que são

O que são SPAs e sua utilização.

Explicar todos os pontos positivos do React e componentização, inclusive até mostrando exemplos de páginas com React.

Explicar a diferença de TypeScript para JavaScript, onde ele roda e como ele se torna JS também.

**Instalações necessárias:**

* Instalação do [NPM](https://www.npmjs.com/) - Explicação do que é NPM, NPX E NVM

Diferença entre NPM e NPX: o primeiro é um gerenciador de pacotes (que os instala localmente ou globalmente), enquanto o segundo é um executador. Quando você executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.
Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los.

NVM: Node Version Manager, vai te permitir escolher de forma simples qual versão do node usar em cada projeto, além de ser útil pra quando você precisa fazer manutenção de código em um projeto antigo, pois versões antigas podem não ter as mesmas funcionalidades disponíveis nas versões mais recentes. Também é bom pra quando você quer testar as novas funcionalidades do node em versões que ainda não estão estáveis.

* Instalação do [Node.js](https://nodejs.org/en/) (download direto ou via [Chocolatey](https://chocolatey.org/)) - Explicação do que é

Caso utilize NVM: `nvm install <versão estável>` e depois `node --version`

* Mostra as extensões do VSCode que estarei utilizando

Simple React Snippets e Highlight selection

**Criação do projeto em si:**

1. Criação do projeto com `npx create-react-app my-app --template typescript`
2. Navegação entre os arquivos criados e explicação sobre para que serve cada um

Sobre todos os arquivos, incluindo serviceWorker que será exluído.
Sobre a diferença da pasta src (código fonte) e a pasta public (código público) assim que inicia.

> Obs no exercício de React com JS: nessa pergunta a resposta “usa a div root no arquivo index.js” não é verdade, pois a div root está no arquivo index.html dentro da pasta public, no index.js só faz referência a div, isso faz parte da falta de explicação sobre a pasta public

3. Execução com `npm start` para ver rodando no navegador

*Quebra de vídeo*

**Personalizando o nosso projeto:**

4. Faz uma limpa no projeto de arquivos e linhas que não serão utilizados
5. Altera o retorno do `App` para dar o nosso `Hello World` personalizado
6. React (ecossistema) vs react (biblioteca)
7. Explicação sobre TSX e JSX - inserção de código muito similar ao HTML

Os componentes do React implementam um método `render()` que recebe os dados de entrada e retornam o que deve ser exibido. Normalmente é utilizado uma sintaxe parecida com XML chamada JSX.

O JSX é opcional e não é necessário para usar o React. Teste o Babel REPL para ver o código JavaScript bruto produzido pela etapa de compilação do JSX.

O React usa a div="root" no arquivo index.ts, inserindo os elementos declarados em TSX do arquivo App.ts. (mostra o inspecionar do navegador)

### Aula 2: Explicações adicionais e início da criação do projeto

* Como funciona VDOM

* Utilizando o retorno dentro do `App()` coloca o código inicialmente lá

O react por tras dos panos retorna no navegador a árvore de HTML, mesmo a gente não tendo desenvolvido isso. (Transpilação)

* É necessário que as tags dentro do `return` estejam englobadas por uma tag pai

* Fala sobre componentização e esse ser uma das vantagens de usar react 

Cria a pasta `components` e adiciona cada arquivo com letra maiúscula `.tsx` lá dentro. Também `import React from "react"`

Explica aqui sobre a existência do `class component`, porém não será esse que utilizarmos, pois existe uma forma mais atualizada com `function component`. Cria um e coloca tudo o que tinha no `App()` e importa lá o componente.

* Explicação sobre export e export default com as devidas importações em outros arquivos.

*Quebra de vídeo*

* Inserção do código TypeScript dentro do TSX

### Aula 3: Estilização dos componentes

* Criação de pastas para cada componente e arquivos de estilização na pasta `assets`, além de imagens se necessário

Tomar cuidado para não duplicar o nome da pasta com o dos arquivos e deixar confuso. Usar `index.tsx`.

* `className` ao invés do `class` do HTML

Funciona no inspecionar, porém tem o aviso pedindo para mudar.

* Utilização do [Styled Components](https://styled-components.com/) e [Material UI](https://material-ui.com/pt/)

Explicação de como funcionam e porque é positivo sua utilização para esse projeto.
Verificar o `reset.css`.

### Aula 4: Eventos e propriedades

* Utilização de `onChange` ou `onSubmit` para mostrar dinâmicamente o `console.log` quando alteramos um elemento



### Aula 5: Hooks



---

## Detalhes a serem atentados:

1. Identação do código
2. Duplicidade de nomes nos arquivos
3. Evitar camelCase e PascalCase para nomeação de arquivos `.tsx`
4. Declaração de `type` sempre antes da implementação
5. Evitar `number` para variáveis de tipo indexável
6. Se usar CSS, utilizar padrão **BEM**
7. Preferível gerenciar estados no componente pai
8. Utilizar Yup em validações

* [Cuidados](https://oieduardorabelo.medium.com/typescript-18-dicas-e-padr%C3%B5es-para-seu-c%C3%B3digo-b63f492a42cd)
* [Parecer técnico do Luiz](https://docs.google.com/document/d/1DBP505oCz2HGg89kDBUanwJiTReSxe7fCe659y1gwWc/edit)
* [React + Typescript Cheatsheets](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)
* [Ciclo de vida de componentes React](https://www.w3schools.com/react/react_lifecycle.asp)

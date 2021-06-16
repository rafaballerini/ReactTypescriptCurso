## Conceitos teóricos sobre React e Typescript

## Criação do projeto

Para isso, será utilizado o Yarn, mas se você preferir, temos também o famoso NPM que também é um gerenciador de pacotes que pode ser utilizado aqui.

**Gerenciadores de pacote**

O **Yarn** é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação. Por ser uma ferramenta de código aberto, há uma comunidade de colaboradores experientes e qualificados que, continuamente, contribuem com novas adições de códigos, gerando pacotes variados. Assim, é possível utilizá-los nas mais diversas possibilidades, [veja mais aqui](https://rockcontent.com/br/blog/yarn/)

O **NPM** é uma ferramenta do Node.js para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando, [veja mais aqui](https://rockcontent.com/br/blog/npm/)

[Um pouco da diferença entre eles](https://blog.umbler.com/br/npm-vs-yarn-e-agora-quem-podera-nos-defender/?gclid=Cj0KCQjwk4yGBhDQARIsACGfAetdwgXVjmeMvT55b8h80VYTJIDFO4lZa4SjT3OgQIF2qZmx58Uk754aAujKEALw_wcB)

Primeiramente iremos instalar o typescript. Para isso, utilizaremos o comando `yarn add typescript`

Então, para criarmos o nosso projeto, podemos fazer isso manualmente, adicionando todos os arquivos necessários para sua configuração, ou apenas rodar um comando com um dos gerenciadores de pacote: [create react-app](https://create-react-app.dev/)

Comando no Yarn:
* `yarn create react-app projeto --template typescript`

Comando com NPM/NPX:
* `npx create-react-app projeto --template typescript`

Pronto, agora temos o nosso projeto criado! Para rodá-lo, devemos entrar dentro da pasta do projeto com `cd projeto` e utilizar o comando `yarn start`

Depois disso, **são criados vários arquivos e algumas pastas que vou explicar para que servem**:

![Explorer](https://media.discordapp.net/attachments/826504749561413662/852915734044344390/unknown.png)

**`node_modules`**

Para que funcione corretamente, o react precisa de módulos que são armazenadas dentro dessa pasta (por isso não podemos apagar).

Módulos são códigos desenvolvidos por outras pessoas que você irá reutilizar no seu projeto.

Quando você inicia seu projeto react, a pasta `node_modules` é gerada automaticamente, armazenando todos os módulos ou pacotes necessários para seu projeto.

**`public`**

Pasta que contém todos os recursos públicos da aplicação, como ícones, imagens e o nosso `index.html`. Somente arquivos definidos nesta pasta podem ser usados na página `index.html`.

**`index.html`**

É o arquivo html que contém na section `body` a tag `<div id="root"></div>`. É nesta tag que nossa aplicação React será renderizada e vai ser exibida. Esta div é o contâiner para a nossa aplicação React, é o template da página da aplicação.

Inclusive, se você abrir esse arquivo diretamente no navegador, aparecerá uma página em branco. 

O que poderá ser adicionado nesse arquivo são metadados ou fontes web para o projeto, de resto desenvolveremos em outros arquivos.

**`manifest.json`**

Contém metadados sobre o projeto, como o nome, autor, ícones e descrição. Esses dados serão lidos pelo navegador, para que ele entenda como o projeto irá funcionar.

**`robots.txt`**

Aqui você permitirá ou recusará motores de busca indexarem tal parte do seu site, para que não apareça nas páginas de buscas. Normalmente colocamos páginas administrativas para não aparecerem nas páginas de buscas. 

Um cuidado q você deve ter é que da mesma forma que você está escondendo ele das buscas e navegações, o aquivo robots.txt pode ser acessado pelo usuário colocando na url `/robots.txt`, sendo assim, o usuário poderá ver cada parte do seu site que você ocultou.

**`src`**

Contém os arquivos do primeiro componente react que já vem criado dentro do projeto, o `<App />`.

Será dentro dessa pasta que criaremos todos os outros componentes durante o desenvolvimento e também onde iremos estilizá-los.

**`App.css`**

Arquivo de estilização do componente `App.tsx`.

**`App.test.tsx`**

Todo arquivo de teste serve para certificar algo dentro do projeto. Nesse caso, ele está garantindo que o componente `App` renderizará o link em "Learn React".

**`App.tsx`**

Esse é o componente principal da aplicação. O retorno dele será renderizado na tela, por meio do arquivo `index.tsx` que já veremos.

Dentro dele podemos chamar os demais componentes que criaremos durante o desenvolvimento.

Você pode perceber que a extensão do arquivo não é `.ts` de typescript, mas sim `.tsx`. [Explicação](https://www.typescriptlang.org/docs/handbook/jsx.html)

**`index.css`**

Aqui ficarão os estilos de contâiners do DOM da aplicação.

**`index.tsx`**

O método `ReactDOM.render` vai renderizar o componente App definido na tag <App />, na div `root`  que foi especificada no arquivo `index.html` da pasta `public`.  Se o elemento React já tiver sido processado no contâiner, será feita uma atualização no mesmo, e, o DOM será alterado para refletir o elemento React mais recente.

Eu explicarei para vocês em breve como ocorre essa relação com DOM e VDOM no react.

**`react-app-env.d.ts`**

Esse arquivo referencia declarações de tipos específicos usados em projetos iniciados com `create react-app`.

Ele contém as informações que o react possui sobre os tipos de elementos que ele irá utilizar no projeto. Sem ele, o editor de código/IDE não reconhecerá algumas coisas, como o próprio `import logo from './logo.svg';`, que não seria entendido como uma imagem.

**`reportWebVitals.ts`**

É uma ferramenta para traçar métricas de performance da aplicação, visando captar informações sobre a experiência do usuário na página. [Mais informações](https://www.newline.co/@bespoyasov/measuring-performance-in-create-react-app--b0d3c098)

**`setupTests.ts`**

Esse arquivo será utilizado para fazer as configurações de teste utilizando [Jest](https://jestjs.io/pt-BR/), um framework de testes Javascript.

**`.gitignore`**

Aqui são descritos todos os arquivos que não serão enviados para o seu repositório git. É ideal para colocar pastas e arquivos usados apenas durante o desenvolvimento e também para tokens e senhas que devem ser acessados apenas por quem desenvolver.

**`package.json`**

Esse arquivo lista em formato de objeto JSON algumas as configurações e pacotes necessários para o seu projeto, incluindo suas versões. Ele torna mais fácil para outras pessoas que forem desenvolver a aplicação saberem o que precisam utilizar pra isso.

**`README.md`**

Esse arquivo é utilizado para documentar o seu projeto dentro do repositório git. Nele você descreverá informações sobre as tecnologias que você está utilizando, como rodar o projeto, como testar e tudo mais que achar necessário para outras pessoas que forem utilizá-lo.

Inclusive, se você abrir o arquivo verá que o próprio `create react-app` já deixou descrito alguns comandos utilizados para o desenvolvimento do projeto.

**`yarn.lock`**

O yarn precisa guardar todas as versões de cada uma das dependências instaladas e, para isso, utiliza esse arquivo.

**`tsconfig.json`**

A presença desse arquivo mostra a raíz do projeto (nesse caso é a pasta `projeto` mesmo).

Ele especifica as configurações do compilador necessárias pra compilar o projeto e também alguns arquivos necessários para o projeto rodar.

Depois de entender o que é cada arquivo que foi criado, podemos fazer uma limpa no que não iremos utilizar para o nosso projeto. Sendo assim, apagarei os seguintes arquivos:

* `favicon.ico`
* `logo192.png`
* `logo512.png`
* `manifest.json`
* `robots.txt`
* `App.css` - pois iremos fazer a estilização do zero
* `App.test.tsx`
* `logo.svg`
* `reportWebVitals.ts`
* `setupTests.ts`

Não podemos esquecer de tirar as importações e chamadas dentro dos outros arquivos! Então vamos fazer isso também, além de limpar comentários.

Além disso vou dar uma olhada no `.gitignore` e checar se a pasta `node_modules` está dentro dele, afinal a quantidade de arquivos é muito grande para ser enviada pro repositório, e como a versão que você está usando está definida no `package.json`, ela não é necessária de ser enviada.

## DOM e VDOM
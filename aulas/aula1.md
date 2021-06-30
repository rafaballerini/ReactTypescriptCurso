## Conceitos teóricos sobre React e Typescript

*VÍDEO 1*

Olá! Gostaria de te dar as boas vindas ao curso de React com Typescript e explicar um pouquinho do que será visto durante as aulas.

Para melhor compreensão dessa tecnologia eu recomendo já possuir um conhecimento básico a intermediário de HTML, CSS e principalmente Javascript ou Typescript.

Por sinal, aqui na própria [documentação do React](https://pt-br.reactjs.org/docs/hello-world.html) existe um tutorial de Javascript para você avaliar o seu conhecimento na linguagem.

Então durante o curso mostrarei pra você desde o primeiro "Hello World" com React, até um projeto prático completo! Quer ver um pouquinho do que faremos? 

Tranformaremos [esse design do figma](https://www.figma.com/file/qu2Jp5c1OstWhniO4I1Bkc/Curso-React%2FTypescript?node-id=0%3A1) em uma [página totalmente dinâmica](https://react-typescript-curso.vercel.app/) apenas usando React que é uma biblioteca Javascript, porém com Typescript, que é superconjunto de JavaScript. Esses conceitos vão ficar muito mais claros em breve. 

Essa será uma plataforma para você, ou quem for utilizar o seu projeto, organizar os estudos. Será possível criar tarefas com esse pequeno formulário da página, definindo o que você deseja estudar e a quantidade de tempo do seu dia que você quer dedicar pra isso e logo em seguida, elas serão adicionadas automaticamente na lista do lado direito.

Assim que for realizar alguma dessas tarefas, você clicará sob o card, que irá configurar o nosso timer principal e, assim que apertar o botão "Começar", ele irá fazer a contagem do tempo.

Quando chegar em 00:00, ele irá confirmar a tarefa já realizada automaticamente, podendo agora ser chamada uma outra a ser feita.

Para aprender a fazer isso tudo, veremos conceitos importantes de React, como compoentes, estados e hooks, desenvolvimento e tipagem em typescript e também utilizaremos um gerenciador de pacotes, chamado NPM, para nos ajudar com os arquivos que precisamos usar no projeto.

Não esqueça de se organizar a cada aula, pegar um cafézinho, o caderno de anotações, seja ele físico ou virtual e prestar bastante atenção no que veremos.

Vejo vocês lá!

---

*VÍDEO 2*

**O que é React?**

[Documentação](https://pt-br.reactjs.org/)

O time do Facebook tinha dificuldade de sincronizar diferentes elementos na tela da plataforma deles. Um exemplo disso, é quando a pessoa está mexendo ali na aplicação e recebe uma notificação, que deve aparecer instantaneamente no canto da página. Pra isso, deveria ser recarregado tudo da página para apenas a notificação aparecer. Isso causava problemas com a performance da aplicaçao, então a equipe de desenvolvimento percebeu um bom problema a ser solucionado.

Assim, eles criaram o React, que é uma biblioteca Javascript voltada pra criação de interfaces do usuário (ou seja, desenvolvimento front-end) que tem foco em exibir conteúdos alterados frequentemente sem precisar recarregar todo conteúdo.

Em React, tudo é componente, então os elementos das páginas não ficam em um arquivo HTML gigante, com todas as tags, mas sim em arquivos separados por componentes, que são elementos reutilizáveis. Mais pra frente você vai entender melhor esse conceito de componente.

**Vamos ver na prática como isso acontece nas páginas web:**

1. [Facebook](https://www.facebook.com/)
2. [Instagram](https://www.instagram.com/)
3. [Twitter](https://twitter.com/)

Inclusive como vocês podem ver, eu tenho aqui uma extensão chamada [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) que fica azul, indicando que essa página contém React e quando estamos desenvolvendo, fica vermelha, indicando ambiente de desenvolvimento em React. Vocês vão ver! Ela também pode ser usada pra outras funções mas não veremos nesse curso.

**Biblioteca vs Framework:**

Dizer que React é uma biblioteca significa que este não é um framework, mas sim uma coleção de funcionalidades relacionadas que podem ser chamadas pelo desenvolvedor para resolver problemas específicos (criação de interfaces de usuário reaproveitáveis, no caso do React)

Já a principal característica de um framework é a Inversão de Controle, também conhecida como Hollywood Principle. Ou seja, quem dita o que (e como) algo deve ser feito é o framework, não o desenvolvedor — é ele quem chama o seu código, e não o contrário.

O importante disso tudo é que, em geral, bibliotecas são mais flexíveis e menos complexas do que frameworks.

No caso do React, sua única e principal função é a criação de interfaces de usuário, que organiza o que será mostrado para o usuário final na tela sem se preocupar em saber sobre o resto.

**E o tal do react native, onde entra nessa história?**

Vamos imaginar que precisamos resolver esse mesmo problema de recarregamento de elementos na página mencionado pelo time do Facebook, porém em aplicativos de dispositivos móveis. Para isso é utilizado o React Native.

Enquanto o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo, o React Native é a biblioteca voltada para a criação de aplicativos mobile em Android e iOS.

Resumindo, a diferença entre React e React Native é que o primeiro diz respeito à maneira geral com que a biblioteca trabalha, enquanto o segundo traduz o JavaScript para a linguagem nativa do dispositivo, tanto para iOS quanto para Android.

---

*VÍDEO 3*

[Documentação](https://www.typescriptlang.org/)

**Mas Rafa, se o React é uma biblioteca Javascript, porque vamos utilizar Typescript nesse curso?**

Primeiro de tudo: o que é esse typescript?
É um super conjunto tipado do JavaScript desenvolvido pela Microsoft. Ou seja, uma das grandes vantagens de utilizar essa linguagem é que, diferente do Javascript que conhecemos, com ela definimos os tipos dos elementos que usaremos.

Enquanto que com Javascript declarávamos um `let` no início do arquivo e o seu tipo (string, number..) era definido dinâmicamente durante a execução do programa, agora com Typescript já na declaração desse elemento definimos o seu tipo.

Quando falamos de tipagem fraca em desenvolvimento, podemos pensar nessa característica do Javascript, já o typescript é um exemplo de linguagem fortemente tipada.

Isso é ótimo para quem está acostumado com linguagens back-end como Java e C#, em que a tipagem é forte também, e deseja migrar para o front-end.

Ué, mas o que essa tipagem pode trazer de benefício?

Durante o desenvolvimento, nós teremos um controle maior de todas as variáveis, objetos, funções que utilizaremos. Caso a gente vá acessar uma propriedade de um objeto `Pessoa` por exemplo, equanto estivermos escrevendo o nosso código o próprio Intellisense da IDE ou editor de código, como o visual code que utilizaremos, irá sugerir todas as opções que você pode usar.

Além dessa facilidade, nossas aplicações se tornam mais seguras e manuteníveis.

Mas Rafa, como esse Typescript vira Javascript? Afinal é o Javascript que é lido pelo navegador né?
O código Typescript é transformado em Javascript por um compilador de Typescript ou com Babel (compilador Javascript).

Já que o Typescript possui todas essas vantagens, ele tem crescido muito no mercado, principalmente em conjunto com o React, como veremos nesse curso.

---

*VÍDEO 4*

**Criação do projeto**

Para isso, será utilizado o NPM, mas se você preferir, temos também o famoso Yarn que também é um gerenciador de pacotes que pode ser utilizado aqui.

**Gerenciadores de pacote**

O **NPM** é uma ferramenta do Node.js para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando, [veja mais aqui](https://rockcontent.com/br/blog/npm/)

Já o **Yarn** é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação. Por ser uma ferramenta de código aberto, há uma comunidade de colaboradores experientes e qualificados que, continuamente, contribuem com novas adições de códigos, gerando pacotes variados. Assim, é possível utilizá-los nas mais diversas possibilidades, [veja mais aqui](https://rockcontent.com/br/blog/yarn/)

[Um pouco da diferença entre eles](https://blog.umbler.com/br/npm-vs-yarn-e-agora-quem-podera-nos-defender/?gclid=Cj0KCQjwk4yGBhDQARIsACGfAetdwgXVjmeMvT55b8h80VYTJIDFO4lZa4SjT3OgQIF2qZmx58Uk754aAujKEALw_wcB)

Primeiramente iremos instalar o typescript. Para isso, utilizaremos o comando `npm i typescript --save-dev` ou `yarn add typescript -D`

Então, para criarmos o nosso projeto, podemos fazer isso manualmente, adicionando todos os arquivos necessários para sua configuração, ou apenas rodar um comando com um dos gerenciadores de pacote: [create react-app](https://create-react-app.dev/)

Comando com NPM/NPX:
* `npx create-react-app projeto --template typescript`

Comando no Yarn:
* `yarn create react-app projeto --template typescript`

Pronto, agora temos o nosso projeto criado! Para rodá-lo, devemos entrar dentro da pasta do projeto com `cd projeto` e utilizar o comando `npm start` ou `yarn start`

**O que são esses arquivos `.tsx`?**

[Documentação](https://www.typescriptlang.org/docs/handbook/jsx.html)

Em breve eu mostrarei pra você a importância de cada arquivo, individualmente, mas já gostaria de explicar o que significa essa extensão `.tsx`.

Como mencionei anteriormente, o React nos faz deixar de usar os arquivos HTML com suas diversas tags e nos traz essa nova forma de escrever elementos em forma de componentes. Sendo assim, os arquivos TSX servirão para desenvolvermos esses diferentes componentes em uma sintaxe parecida com XML (que gera linguagens de marcação, assim como HTML), mas com elementos de Typescript, podendo incluir a lógica de uma linguagem de programação dentro do arquivo.

Por sinal, quando utilizamos o Javascript para desenvolvermos em React, o formato utilizado é o JSX. Usamos o TSX nesse projeto justamente por termos optado pela linguagem Typescript, porém sua utilização é muito similar.

---

*VÍDEO 5*

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

---

*VÍDEO 6*

## DOM e VDOM

Antes de partirmos para o desenvolvimento do nosso projeto, preciso explicar apenas mais uma coisa pra você, afinal eu falei que o React atualizava os elementos na página sem precisar recarregar tudo novamente, porém não disse como!



Se há uma vantagem clara que o React traz é no modo como ele trabalha com o DOM (Document Object Model) e atualiza os componentes de acordo com seus estados.

Em uma aplicação JavaScript tradicional, o programador deve se preocupar em descobrir quais dados mudaram para poder alterar o DOM e os estados dos elementos criados. Isso é muito trabalhoso e pouco eficiente (lembra do exemplo do botão de curtir acima?).

O que o React propõe é a criação do seu próprio DOM, mais eficiente, no qual os componentes vivem, o que é mais conhecido como Virtual DOM.

Assim, toda vez que um componente é renderizado, o React atualiza o Virtual DOM de cada componente já renderizado e busca as mudanças. E como o Virtual DOM é leve, esse processo é muito rápido.

O React então compara o Virtual DOM com uma imagem do DOM feita antes da atualização e descobre o que realmente mudou, atualizando somente os componentes que mudaram de estado. Há um enorme ganho de performance aqui.

O Virtual DOM, ou VDOM, é uma representação em memória de um DOM (Document Object Model) real de uma interface.

Na prática, DOM real é a estrutura que representa a camada visual de uma página.

Para que fique mais claro, imagine o seguinte processo:

Para atualizar uma página, o React primeiro salva suas alterações em memória, ou seja, em um ambiente chamado de Virtual DOM. Isso acontece porque manipular um DOM virtual é muito mais rápido do que manipular um DOM real — ou seja, a página que está sendo atualizada.

Em front-end, a atualização de DOMs é extremamente corriqueira, uma vez que é através deles que as páginas de um site ou aplicativo são efetivamente atualizadas.

Após criada esta estrutura virtual, o React a traduz para a tela real com o mínimo de processos possível, trazendo mais agilidade para a atualização. Este processo é chamado de reconciliação.
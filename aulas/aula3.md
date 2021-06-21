# Enviando informações entre componentes e lidando com estados

## *vídeo 1 adicionando mais componentes e estilização*

1. Criamos uma nova pasta dentro de `components` chamada `List` para adicionarmos os arquivos em que desenvolveremos os items na lista de tarefas `index.tsx` e `style.scss`

2. Criamos então diretamente um function component e dentro dele adicionamos as tags com a descrição da tarefa e o tempo para conclusão

3. Separaremos o componente **`List`** do **`Item`**.

4. Criar outra pasta em `components` chamada `Item` com os arquivos `index.tsx` e `style.scss`.

Colocar dentro deles toda a lógica do item da lista `<li>`.

5. Estilização

## *Quebra de vídeo 2 - Hook useState()*

**Queremos agora fazer o nosso `Form` enviar as informações digitadas para o nosso `Item`.**

1. Falar sobre o `useState()` que utilizaremos para cada input

[Link da documentação](https://pt-br.reactjs.org/docs/hooks-state.html)

2. Adicionar os estados para os inputs de `task` e `time`.

Para isso então crio as duas `const`

```ts
const [task, setTask] = useState('')
const [time, setTime] = useState('00:00')
```

E também adiciono as propriedades dos inputs de `task` e `time`:

```ts
value={task}
onChange={(event) => { setTask(event.target.value) }}
```

Por fim, ao invés de imprimirmos no `onSubmit` quando dermos enter com o `console.log("texto")`, posso agora imprimir esses valores que eu inserir:

```ts
function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
    console.log(task, time)
    event.preventDefault()
}
```

## *Quebra de vídeo 3 - interfaces*

1. Agora no onSubmit queremos salvar as informações e não somente imprimir no `console.log()`

Criaremos a função `saveItem`, que irá de fato salvar o que escrevemos no formulário

Para isso, usaremos uma interface:

```ts
interface IFormProps {
    saveItem: (data: ITaskData) => void
}
```

Os dados terão o tipo `ITaskData`, que como iremos utilizar em mais componentes, criaremos uma pasta `types` com um arquivo para essa interface `Task.tsx`.

Chamaremos a função quando dermos o enter no `onSubmit`:

```ts
function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
    console.log(task, time)
    event.preventDefault()
    props.saveTask({task, time})
}
```

**Ideia de desafio:** Limpar o formulário após submissão 

Resposta:
```ts
function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
  event.preventDefault()
  props.saveTask({task, time})
  setTask('')
  setTime('00:00')
}
```

Agora declaramos a nossa função que irá salvar as informações digitadas, porém quando chamamos ela dentro do nosso componente no `onSubmit`, ele não reconhece essa função. Em breve veremos como resolver isso.

## *Quebra de vídeo 4 e 5- props*

Agora colocaremos como parâmetro no nosso componente também:

[Explicação sobre props](https://pt-br.reactjs.org/docs/components-and-props.html)
> Props: objeto com as informações passadas pelo componente pai

```ts
function Form (props: IFormProps)
```

Porém, como agora o nosso componente recebe um parâmentro quando é usado, é necessário passarmos esse parâmetro no componente pai `App()`
      
```ts
<Form saveTask={handleSaveTask}/>
```

Criamos uma função para isso:

```ts
const [item, setItem] = useState<ITaskData>()

function handleSaveTask(data: ITaskData) {
    setItem({ ...data, completed: false, selected: false })
}
```

[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) - `<ITaskData>`

[Spread operator: ...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Agora essas informações que estamos salvando no formulário serão enviadas para o componente `Item()`, que mostrará na tela o que escrevemos em forma de cartão:

```ts
{item && <Item item={item}/>}
```

Esse `&&` significa que se o elemento `item` for diferente de nulo (verdadeiro), o que vem em seguida acontecerá.

Rodamos o projeto, porém mesmo escrevendo algo, o componente `Item()` renderiza na tela a mesma coisa ainda.

Para isso, iremos tirar esses valores fixos no componente e colocar os valores inseridos pelo usuário.

```ts
<h1>{props.item.task}</h1>
<span>{props.item.time}</span>
```

## *Quebra de vídeo 6 - listando elementos*

1. Criação da interface da `List`

```ts
import { ITaskData } from '../../types/Task'

interface ITaskListProps {
  list: ITaskData[]
}
```

Passa por parâmetro dentro do componente:

```ts
function List(props: ITaskListProps)
```

Agora faremos um [.map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) para listar todos os itens

```ts
<ul>
    {
        props.list.map((item) => (
            <Item item={item}/>
        ))
    }
</ul>
```

Pode usar () depois do arrow function pois já estamos retornando diretamente

Além disso, no nosso `App()` precisamos chamar a `List` e não mais o `Item`:

```ts
return (
  <div className="App">
    <Form saveTask={handleSaveTask}/>
    <List/>
  </div>
);
```

Como estamos usando typescript, quando apertamos ctrl + espaço aparecem as propriedades desse componente.

![Mágica do ctrl espaço](https://media.discordapp.net/attachments/826504749561413662/855138879660097596/unknown.png)

Agora não usamos mais o `useState` para o item, mas sim para a lista. Então também podemos tirar a importação do item:

```ts
function App() {

  const [list, setList] = useState<ITaskData[]>([])
  
  function handleSaveTask(data: ITaskData) {
    setList([{ ...data, completed: false, selected: false }])
  }

  return (
    <div className="App">
      <Form saveTask={handleSaveTask}/>
      <List list={list}/>
    </div>
  );
}
```

Agora se testarmos, veremos que o item será apenas atualizado por um novo. Então precisamos alterar a nossa manipulação de estado da lista, enviando não somente o item alterado, mas todos os que já haviam sido cadastrados. Para isso usamos o spread operator:

```ts
function handleSaveTask(data: ITaskData) {
  setList([...list, { ...data, completed: false, selected: false }])
}
```
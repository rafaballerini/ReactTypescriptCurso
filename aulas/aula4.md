# 

## *vídeo 1 - componente do relógio*

1. Criar a pasta `Stopwatch` com os arquivos `index.tsx` e `syle.scss`

Inicialmente teremos o return:

```ts
<div>
  <div>
    <p>{"00:15"}</p>
  </div>
  <button>Começar</button>
</div>
```

E iremos chamar esse componente no nosso `App()`, sem esquecer de sua importação:

```ts
<div className="App">
  <Form saveTask={handleSaveTask}/>
  <List list={list}/>
  <Stopwatch/>
</div>
```

2. Estilização do componente

# *Quebra de vídeo 2 - configurando nosso cronômetro*

1. Criaremos a interface do nosso cronômetro:

```ts
interface IStopwatchProps {
  defaultTime: number;
  timeLast: number;
  setTimeLast: React.Dispatch<React.SetStateAction<number>>;
}
```


[Reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)



ALTERAÇÕES:

KEY NO MAP
INTERFACE NO ITEM

**Ideia de desafio:** Limpar o formulário após submissão 
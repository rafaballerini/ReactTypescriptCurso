# Desenvolvendo o projeto

*class components*

1. Criação da pasta `components` dentro de `src` para colocarmos cada componente que iremos desenvolver em suas respectivas pastas.

2. Dentro da pasta `components`, adicionar a pasta `Form`, que será o formulário da nossa aplicação.

![Formulário](https://media.discordapp.net/attachments/831974152667398214/854727743556419614/unknown.png)

3. Criar os arquivos `index.tsx` e `style.scss`. Lembrando que esse index é apenas pra esse componente, e faremos isso para cada um que desenvolvermos, é diferente do index na pasta raíz do projeto.

4. Criar um `class component` com o formulário.

```ts
import React, { Component } from 'react';

class Form extends Component{
    render(){
        return (
            <form>
                <div className="inputContainer">
                    <label htmlFor="tarefa">Nova tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você estudará?"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo" placeholder="00:00"/>
                </div>
                <button type="submit" style={{ display: 'none'}}></button>
            </form>
        )
    }
}

export default Form;
```

> `display: "none"` pois não tem o botão no design, porém precisa existir para quando apertar enter, funcionar o submit.
> Lembrar de explicar onSubmit do botão no formulário e as tags e propriedades usadas.
> Lembrar que `{{ display: 'none'}}` é escrito dessa forma, pois as chaves de fora servem pra dizer que é um código javascript dentro do HTML e as outras são pra dizer que é um objeto js.

*Pausa de vídeo - Lidando com eventos*

5. Mostra o onSubmit funcionando no console

```ts
<form onSubmit={() => console.log("tarefa cadastrada")}>
```

A página é recarregada por padrão no HTML, então pra isso usaremos o evento `evento` que o onSubmit passará como parâmetro (passa mouse por cima para mostrar o tipo), pois ele possui uma função `preventDefault()` que não acionará o reload da página automático.

Agora teremos então 2 linhas dentro da função dentro do return, o que fica um pouco ruim para legibilidade. Para isso, vamos declarar essa mesma função acima do `return` e apenas chamá-la no `onSubmit`.

*antes*
```ts
<form onSubmit={(evento) => {
    console.log("tarefa cadastrada")
    evento.preventDefault()
    }
}>
```

*depois*
```ts
function handleOnSubmit(evento: React.FormEvent<HTMLFormElement>){
        console.log("tarefa cadastrada")
        evento.preventDefault()
}
```

```ts
<form onSubmit={handleOnSubmit}>

```

Podemos ver ao digitarmos `evento.` e apertarmos ctrl + espaço que aparecerão todos as funções e propriedades que poderão ser usadas.

![evento](https://media.discordapp.net/attachments/826504749561413662/855084991078465556/unknown.png)

Se deixássemos sem tipagem, as configurações padrões do typescript reclamariam e pediriam para colocar algum tipo, nem que seja o `: any` (qualquer tipo). Porém, se deixarmos com isso, não poderemos ver quais funções e propriedades esse evento `React.FormEvent<HTMLFormElement>` tem.

*Pausa de vídeo - function components*

6. Transforma em `function component`, pois é uma forma mais atualizada.

*Pausa de vídeo - estilização*

7. Estilização com SASS (em breve)
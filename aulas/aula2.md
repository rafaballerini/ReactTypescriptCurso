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

**ver o tipo do evento e adicionar `: React.FormEvent<HTMLFormElement>`se necessário**

Porém agora iramos usar mais de uma linha dentro da mesma função, então vamos criar um nome pra ela e declará-la acima do componente.

Para isso, chamaremos de `<form onSubmit={handleOnSubmit}>`

E declararemos da seguinte forma:

```ts
const handleOnSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    console.log("tarefa cadastrada")
    evento.preventDefault()
}
```

*Pausa de vídeo - function components*

6. Transforma em `function component`, pois é uma forma mais atualizada.

7. Estilização com SASS (em breve)
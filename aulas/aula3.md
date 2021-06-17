# Adicionando mais componentes e 

1. Criamos uma nova pasta dentro de `components` chamada `List` para adicionarmos os arquivos em que desenvolveremos os items na lista de tarefas `index.tsx` e `style.scss`

2. Criamos então diretamente um function component e dentro dele adicionamos as tags com a descrição da tarefa e o tempo para conclusão

3. Separaremos o componente **`List`** do **`Item`**.

4. Criar outra pasta em `components` chamada `Item` com os arquivos `index.tsx` e `style.scss`.

Colocar dentro deles toda a lógica do item da lista `<li>`.

5. Fazer o nosso `Form` enviar as informações digitadas para o nosso `Item`.

6. Criaremos a função `saveItem`, que irá de fato salvar o que escrevemos no formulário

Para isso, usaremos uma interface

```ts
interface IFormProps {
    saveItem: (data: IItemProps) => void
}
```

import {IItemProps} from '../../types/Item'

interface IFormProps {
    saveItem: (time: string, task: string) => void
}

{ saveItem }: IFormProps
import {Item} from './Item/index'
import { ITarefa } from '../../types/Tarefa'
import styles from './style.module.scss'

interface ILista {
  lista: ITarefa[],
  abreItem: (item: ITarefa, index: number) => void
}

export const Lista:React.FC<ILista> = props => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {
          props.lista.map((item, index) => (
            <Item 
              key={item.id}
              item={item} 
              index={index} 
              abreItem={props.abreItem}/>
          ))
        }
      </ul>
    </aside>
  )
}
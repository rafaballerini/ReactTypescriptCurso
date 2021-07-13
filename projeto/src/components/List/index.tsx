import {Item} from '../Item/index'
import { ITaskData } from '../../types/Task'
import styles from './style.module.scss'

interface ITaskListProps {
  list: ITaskData[],
  onClick: (item: ITaskData, index: number) => void
}

export function List(props: ITaskListProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Tarefas</h2>
      <ul>
        {
          props.list.map((item, index) => (
            <Item 
              key={item.id}
              item={item} 
              index={index} 
              onClick={props.onClick}/>
          ))
        }
      </ul>
    </aside>
  )
}
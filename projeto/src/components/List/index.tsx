import {Item} from '../Item/index'
import { ITaskData } from '../../types/Task'
import './style.scss'

interface ITaskListProps {
  list: ITaskData[],
  onClick: (index: number) => void
}

export function List(props: ITaskListProps) {
  return (
    <aside className="lista-tarefas">
      <h2>Tarefas</h2>
      <ul>
        {
          props.list.map((item, index) => (
            <Item 
              key={item.task}
              item={item} 
              index={index} 
              onClick={props.onClick}/>
          ))
        }
      </ul>
    </aside>
  )
}
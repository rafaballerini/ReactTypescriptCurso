import React from 'react';
import Item from '../Item/index'
import { ITaskData } from '../../types/Task'

interface ITaskListProps {
  list: ITaskData[],
  onClick: (index: number) => void
}

function List(props: ITaskListProps) {
  return (
    <aside>
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

export default List
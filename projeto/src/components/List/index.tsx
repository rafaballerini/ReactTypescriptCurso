import React from 'react';
import Item from '../Item/index'
import { ITaskData } from '../../types/Task'

interface ITaskListProps {
    list: ITaskData[]
  }

function List(props: ITaskListProps) {
    return (
    <aside>
        <h2>Tarefas</h2>
        <ul>
            {
                props.list.map((item) => (
                    <Item item={item}/>
                ))
            }
        </ul>
    </aside>
    )
}

export default List
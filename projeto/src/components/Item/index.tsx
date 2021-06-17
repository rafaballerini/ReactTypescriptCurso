import React from 'react'
import {ITaskData} from '../../types/Task'

interface IItemProps {
    item: ITaskData,
    index: number,
    onClick: (index: number) => void
}

function Item(props: IItemProps){
    return(
        <li onClick={() => props.onClick(props.index)}>
            <h1>{props.item.task}</h1>
            <span>{props.item.time}</span>
        </li>
    )
}

export default Item
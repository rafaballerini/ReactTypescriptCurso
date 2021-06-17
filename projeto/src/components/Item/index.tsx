import React from 'react'
import {ITaskData} from '../../types/Task'

function Item(props: {item: ITaskData}){
    return(
        <li>
            <h1>{props.item.task}</h1>
            <span>{props.item.time}</span>
        </li>
    )
}

export default Item
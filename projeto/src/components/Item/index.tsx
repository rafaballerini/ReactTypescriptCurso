import { ITaskData } from '../../types/Task'
import './style.scss'

interface IItemProps {
  item: ITaskData,
  index: number,
  onClick: (item: ITaskData, index: number) => void
}

export function Item(props: IItemProps) {
  return (
    <li
      className={`item ${props.item.selected ? "item--selected" : ""} ${props.item.completed ? "item--completed" : ""}`}
      onClick={() => !props.item.completed && props.onClick(props.item, props.index)}>
      <h3>{props.item.task}</h3>
      <span>{props.item.time}</span>
      {props.item.completed && <span className="concluido" aria-label="icone de concluido"></span>}
    </li>
  )
}
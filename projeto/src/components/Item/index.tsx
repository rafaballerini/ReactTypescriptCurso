import { ITaskData } from '../../types/Task'

interface IItemProps {
  item: ITaskData,
  index: number,
  onClick: (index: number) => void
}

export function Item(props: IItemProps) {
  return (
    <li
      className={`${props.item.selected ? "selected" : "not_selected"}`}
      onClick={() => props.onClick(props.index)}>
      <h1>{props.item.task}</h1>
      <span>{props.item.time}</span>
      {props.item.completed && <span>COMPLETADO</span>}
    </li>
  )
}
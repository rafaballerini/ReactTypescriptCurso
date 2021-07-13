import { ITaskData } from '../../types/Task'
import styles from './style.module.scss'

interface IItemProps {
  item: ITaskData,
  index: number,
  onClick: (item: ITaskData, index: number) => void
}

export function Item(props: IItemProps) {
  return (
    <li
      className={`${styles.item} ${props.item.selected ? styles.itemSelected : ""} ${props.item.completed ? styles.itemCompleted : ""}`}
      onClick={() => !props.item.completed && props.onClick(props.item, props.index)}>
      <h3>{props.item.task}</h3>
      <span>{props.item.time}</span>
      {props.item.completed && <span className={styles.concluido} aria-label="icone de concluido"></span>}
    </li>
  )
}
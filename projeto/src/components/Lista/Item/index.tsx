import { ITarefa } from '../../../types/Tarefa'
import styles from './style.module.scss'

interface IItem {
  item: ITarefa,
  index: number,
  abreItem: (item: ITarefa, index: number) => void
}

export const Item:React.FC<IItem> = props => {
  return (
    <li
      className={`${styles.item} ${props.item.selecionado ? styles.itemSelecionado : ""} ${props.item.completado ? styles.itemCompletado : ""}`}
      onClick={() => !props.item.completado && props.abreItem(props.item, props.index)}>
      <h3>{props.item.tarefa}</h3>
      <span>{props.item.tempo}</span>
      {props.item.completado && <span className={styles.concluido} aria-label="icone de concluido"></span>}
    </li>
  )
}
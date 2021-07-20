import { useState } from 'react'
import { Form } from '../components/Formulario/index'
import { Lista } from '../components/Lista/index'
import { Cronometro } from '../components/Cronometro/index'
import { ITarefa } from '../types/Tarefa'
import { timeToSeconds } from 'common/utils/date'
import styles from "./style.module.scss"

export const App = () => {

  const [lista, setLista] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  const [tempo, setTempo] = useState<number>(0)

  function enviarTarefa(data: ITarefa) {
    setLista([...lista, { ...data, completado: false, selecionado: false }])
  }

  function selecionaItem(item: ITarefa, index: number) {
    item.selecionado = true
    setSelecionado(item)
    setLista((listaAnterior: ITarefa[]) =>
      listaAnterior.map((itemAnterior: ITarefa, indexAnterior: number) => (
        indexAnterior === index ? { ...itemAnterior, selecionado: true } : itemAnterior
      ))
    )
    const segundos = timeToSeconds(item.tempo)
    setTempo(segundos)
  }

  function tarefaFinalizada() {
    if (selecionado) {
      const item = selecionado
      setLista((listaAnterior: ITarefa[]) =>
        listaAnterior.map((itemAnterior: ITarefa) => (
          itemAnterior.id === item.id ? { ...itemAnterior, selecionado: false, completado: true } : itemAnterior
        )))
      setTempo(0)
    }
  } 

  return (
    <div className={styles.AppStyle}>
      <Form enviarTarefa={enviarTarefa} />
      <Cronometro tempoFinalizado={tarefaFinalizada} tempo={tempo} />
      <Lista lista={lista} abreItem={selecionaItem} />
    </div>
  );
}
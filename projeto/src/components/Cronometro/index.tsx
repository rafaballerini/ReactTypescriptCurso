import { useState, useEffect } from 'react';
import { Relogio } from './Relogio/index'
import { delay } from '../../common/utils/date'
import styles from './style.module.scss'

interface ICronometro {
  tempo: number,
  tempoFinalizado:()=>void
}

export const Cronometro:React.FC<ICronometro> = props => {
  const [rodando, setRodando] = useState<boolean>(false);
  const [tempoRestante, setTempoRestante] = useState<number>(0);

  useEffect(() => {
    setTempoRestante(props.tempo)
  }, [props.tempo])

  async function iniciaCronometro() {
    setRodando(true);
    let contador = tempoRestante

    while (contador > 0){
      await delay()
      setTempoRestante(tempoRestante => tempoRestante - 1);
      contador--
    }
    pararCronometro()
  }

  function pararCronometro(){
    setRodando(false);
    props.tempoFinalizado();
  }
  
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio totalSegundos={tempoRestante}/>
      </div>
      <button disabled={rodando} onClick={() => iniciaCronometro()}>Começar</button>
    </div>
  )
}
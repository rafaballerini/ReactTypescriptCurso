import { useState, useEffect } from 'react';
import { setTimeout } from 'timers';
import { Relogio } from './Relogio/index'
import { date } from '../../common/utils/date'
import styles from './style.module.scss'

interface ICronometro {
  tempo: number,
  tempoFinalizado:()=>void
}

export const Cronometro:React.FC<ICronometro> = props => {
  const [rodando, setRodando] = useState<boolean>(false);
  const [tempoRestante, setTempoRestante] = useState<number>(0);
  
  const tempoSegundos = 1;
  const tempoMilisegundos = tempoSegundos * 1000

  useEffect(() => {
    console.log(props.tempo)
    setTempoRestante(props.tempo)
  }, [props.tempo])

  async function iniciaCronometro() {
    setRodando(true);

    while (tempoRestante > 0){
      await date.delay()
      const proximoTempo = tempoRestante - tempoSegundos
      console.log(proximoTempo, tempoRestante, tempoSegundos)
      setTempoRestante(proximoTempo);
    }
    pararCronometro()
  }

  function pararCronometro(){
    setRodando(false);
    props.tempoFinalizado();
  }
  
  return (
    <div className={styles.cronometro}>
      <div className={styles.relogioWrapper}>
        <Relogio totalSegundos={tempoRestante}/>
      </div>
      <button disabled={rodando} onClick={() => iniciaCronometro()}>Começar</button>
    </div>
  )
}
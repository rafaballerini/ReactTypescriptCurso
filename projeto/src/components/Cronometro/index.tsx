import { useState } from 'react';
import { Relogio } from './Relogio/index'
import styles from './style.module.scss'

interface ICronometro {
  tempo: number,
  tempoFinalizado:()=>void
}

export const Cronometro:React.FC<ICronometro> = props => {
  const [rodando, setRodando] = useState<boolean>(false);
  const [proximoTempo, setProximoTempo] = useState<number>(0);
  
  function iniciaCronometro() {
    console.log("cronometro iniciou")
    const tempoDefinido = 1;
    const delay = props.tempo * 1000
    // setRodando(true);
    const interval = setInterval(() => {
      setProximoTempo(props.tempo - tempoDefinido);
      if(proximoTempo < 0){
        pararCronometro()
        setProximoTempo(0);
        clearInterval(interval);
      }
      setProximoTempo(proximoTempo);
    }, delay)
  }

  function pararCronometro(){
    setRodando(false);
    props.tempoFinalizado();
  }
  
  return (
    <div className={styles.cronometro}>
      <div className={styles.relogioWrapper}>
        <Relogio totalSegundos={props.tempo}/>
      </div>
      <button disabled={rodando} onClick={iniciaCronometro}>Começar</button>
    </div>
  )
}
import { TimerView } from '../TimerView/index'
import styles from './style.module.scss'

interface IStopwatchProps {
  time: number;
  initiateCountdown:() => Promise<void>;
}

export function Stopwatch(props: IStopwatchProps){
  
  return (
    <div className={styles.cronometro}>
      <div className={styles.relogioWrapper}>
        <TimerView totalSeconds={props.time}/>
      </div>
      <button onClick={props.initiateCountdown}>Começar</button>
    </div>
  )
}
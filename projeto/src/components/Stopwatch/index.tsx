import { TimerView } from '../TimerView/index'
import styles from './style.module.scss'

interface IStopwatchProps {
  isRunning: boolean;
  initiateCountdown: () => void;
  time: number;
}

export function Stopwatch(props: IStopwatchProps){
  
  return (
    <div className={styles.cronometro}>
      <div className={styles.relogioWrapper}>
        <TimerView totalSeconds={props.time}/>
      </div>
      <button disabled={props.isRunning} onClick={props.initiateCountdown}>Começar</button>
    </div>
  )
}
import { TimerView } from '../TimerView/index'
import './style.scss'

interface IStopwatchProps {
  time: number;
  initiateCountdown:() => Promise<void>;
}

export function Stopwatch(props: IStopwatchProps){
  
  return (
    <div className="cronometro">
      <div className="relogio-wrapper">
        <TimerView totalSeconds={props.time}/>
      </div>
      <button onClick={props.initiateCountdown}>Começar</button>
    </div>
  )
}
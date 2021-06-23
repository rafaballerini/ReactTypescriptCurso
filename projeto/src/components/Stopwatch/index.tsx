import { TimerView } from '../TimerView/index'
import { date } from '../../common/utils/date'
import './style.scss'

interface IStopwatchProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  onFinish:() => void;
}

export function Stopwatch(props: IStopwatchProps){
  
  async function handleOnClick() {
    for (let i = 1; i <= props.time; i++) {
      await date.delay()
      props.setTime((prevState) => prevState - 1)
    }
    props.onFinish()
  }

  return (
    <div className="cronometro">
      <div>
        <TimerView totalSeconds={props.time}/>
      </div>
      <button onClick={handleOnClick}>Começar</button>
    </div>
  )
}
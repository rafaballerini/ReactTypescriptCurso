import './style.scss'

interface ITimerViewProps {
  totalSeconds: number
}

export function TimerView(props: ITimerViewProps) {

  const minutes = ('0'+ Math.floor(props.totalSeconds/60)).slice(-2);
  const secondsLeft = ('0'+ props.totalSeconds % 60).slice(-2);
  const [minuteDozens, minuteUnits] = minutes.split('');
  const [secondDozens, secondUnits] = secondsLeft.split('');

  return (
    <>
      <span className="timer-numero">{minuteDozens}</span>
      <span className="timer-numero">{minuteUnits}</span>
      <span className="timer-divisao">:</span>
      <span className="timer-numero">{secondDozens}</span>
      <span className="timer-numero">{secondUnits}</span>
    </>
  );
}
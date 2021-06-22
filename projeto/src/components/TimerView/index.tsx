
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
      <span className="minute-dozens">{minuteDozens}</span>
      <span className="minute-units">{minuteUnits}</span>
      :
      <span className="second-dozens">{secondDozens}</span>
      <span className="second-units">{secondUnits}</span>
    </>
  );
}
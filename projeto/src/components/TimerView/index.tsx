import styles from './style.module.scss'

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
      <span className={styles.timerNumero}>{minuteDozens}</span>
      <span className={styles.timerNumero}>{minuteUnits}</span>
      <span className={styles.timerDivisao}>:</span>
      <span className={styles.timerNumero}>{secondDozens}</span>
      <span className={styles.timerNumero}>{secondUnits}</span>
    </>
  );
}
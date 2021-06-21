import { useState } from 'react'

interface IStopwatchProps {
  defaultTime?: string;
}

function timeToNumber(defaultTime: string){
  // {00:00:00}
  const [hourString, minuteString, secondString] = defaultTime.split(':')
  const timeSeconds = (parseInt(hourString) * 3600) + (parseInt(minuteString) * 60) + parseInt(secondString)
  return timeSeconds
}

// function formatToTimeString(timeSeconds: number) {
//   const minutes = ('0'+ Math.floor(timeSeconds / 60)).slice(-2);  
//   const secondsLeft = ('0'+ timeSeconds % 60).slice(-2);

//   return `${minutes}:${secondsLeft}`;
// }

function Stopwatch(props: IStopwatchProps){

  const [time, setTime] = useState(timeToNumber(props.defaultTime || "01:10:10"))

  function handleOnClick(){
    const timer = setInterval(() => { 
      setTime((previous) => {
        if (!previous) {
          clearInterval(timer);
        }
        return --previous
      }) 
    }, 1000);
  }

  return (
    <div>
      <div>
          <div>
              <span>{time}</span>
              {/* <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
              <span>{secondLeft}</span>
              <span>{secondRight} </span> */}
          </div>
      </div>
      <button onClick={handleOnClick}>Começar</button>
    </div>
  )
}

export default Stopwatch
import React, { useState } from 'react'

interface IStopwatchProps {
  defaultTime: string;
}

function parseMinute(initTime?: string): string {
  if (initTime) {
    console.log(initTime)
    const [hourString, minuteString, secondString] = initTime.split(':')
    const newTime = [(parseInt(hourString) * 60) + (parseInt(minuteString)), parseInt(secondString)]
    const newTimeString = newTime.join(':')
    return newTimeString
  }
  return '00:00'
}

function Stopwatch(props: IStopwatchProps){

  return (
    <div>
      <div>
        <p>{parseMinute(props.defaultTime)}</p>
      </div>
      <button>Começar</button>
    </div>
  )
}

export default Stopwatch
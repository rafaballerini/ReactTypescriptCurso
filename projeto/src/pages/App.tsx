import { useState } from 'react'
import { Form } from '../components/Form/index'
import { List } from '../components/List/index'
import { Stopwatch } from '../components/Stopwatch/index'
import { ITaskData } from '../types/Task'
import { date } from 'common/utils/date'
import styles from './style.module.scss'

function App() {

  const [list, setList] = useState<ITaskData[]>([])
  const [selected, setSelected] = useState<ITaskData>()
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState(false);


  function handleSaveTask(data: ITaskData) {
    setList([...list, { ...data, completed: false, selected: false }])
  }

  function handleOnClick(item: ITaskData, index: number) {
    item.selected = true
    setSelected(item)
    setList((prevList: ITaskData[]) =>
      prevList.map((prevItem: ITaskData, prevIndex: number) => (
        prevIndex === index ? { ...prevItem, selected: true } : prevItem
      ))
    )
    setTime(date.timeToSeconds(item.time))
  }

  function handleOnFinish() {
    if (selected) {
      const item = selected
      setList((prevList: ITaskData[]) =>
        prevList.map((prevItem: ITaskData) => (
          prevItem.id === item.id ? { ...prevItem, selected: false, completed: true } : prevItem
        )))
      setTime(0)
    }
    setIsRunning(false);
  }


  function initiateCountdown() {
    setIsRunning(true);
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev === 0) {
          clearInterval(interval);
          handleOnFinish()
          return prev
        }
        return prev - 1
      });
    }, 1000)
  }

  return (
    <div className={styles.App}>
      <Form saveTask={handleSaveTask} />
      <Stopwatch initiateCountdown={initiateCountdown} isRunning={isRunning} time={time} />
      <List list={list} onClick={handleOnClick} />
    </div>
  );
}

export default App
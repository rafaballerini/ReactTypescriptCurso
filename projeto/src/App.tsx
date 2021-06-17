import React from 'react';
import Form from './components/Form/index'
import Item from './components/Item';
import { ITaskData } from '../types/Task';

function App() {
  return (
    <div className="App">
      <Form saveTask={["12:33:00", "React"]}/>
      <Item/>
    </div>
  );
}

export default App;
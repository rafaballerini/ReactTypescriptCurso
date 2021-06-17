import React from 'react';
import Form from './components/Form/index'
import Item from './components/Item';
import { ITaskData } from '../types/Task';

function App() {
  return (
    <div className="App">
      <Form saveTask={handle}/>
      <Item/>
    </div>
  );
}

export default App;
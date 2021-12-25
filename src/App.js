import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const head = [
    'Nepal', 'India', 'China', 'England'
  ];
  const body = [
    'Landlocked Country. Currency is called Nepali Rupees.', 'Currency is called Indian Rupees.', 'Currency is called Chinese Yen.',
    'Currency is Pound Sterling. Is ruled by queen.'
  ];
  // const objects = {
  //   head: [
  //     'Nepal', 'India', 'China', 'England'
  //   ],
  //   body: [
  //     'Landlocked Country. Currency is called Nepali Rupees.', 'Currency is called Indian Rupees.', 'Currency is called Chinese Yen.',
  //     'Currency is Pound Sterling. Is ruled by queen.'
  //   ]
  // };
  const [count, setCount] = useState(0);
  
  window.addEventListener('DOMContentLoaded', ()=>{
    const last_count = localStorage.getItem('last_count');
    if (last_count){
      setCount(~~last_count)
    }
  })
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  window.addEventListener('beforeunload', (e)=>{
    localStorage.setItem('last_count', count)
  }, false)

  return (
    <div className="App">
      <header className="App-header">
        <Header count={count} increase={increaseCount} decrease={decreaseCount} reset={resetCount} maxCount={head.length-1}/>
        <Paragraph head={head[count]} body={body[count]}/>
      </header>
    </div>
  );
}

export default App;

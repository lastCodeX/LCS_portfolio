import { useState } from 'react'
import './index.scss'

function App() {
 const [count, setCount] = useState(0)

 function increaseCount () {
  setCount(count + 1)
 }
 function decreaseCount () {
  setCount(count - 1)
 }
  return (
    <>
      <div className='App'>
        <div>
          <h2>Счетчик:</h2>
          <h1>{count}</h1>
          <button onClick={decreaseCount} className='minus'>Минус - </button>
          <button onClick={increaseCount} className='plus'>Плюс + </button>
        </div>
      </div>
        
    </>
  )
}

export default App

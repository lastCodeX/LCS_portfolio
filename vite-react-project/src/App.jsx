import { useState } from 'react'
import './App.scss'
import Modal from './Components/Modal'

function App() {

 const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={()=>{setOpen(true)}} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen}></Modal>
    </div>
  )
}

export default App

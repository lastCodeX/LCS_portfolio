import Block from "./Components/Block"
import './App.scss'

function App() {

  return (
    <div className='App'>
      <Block value={0} currency="RUB"/>
      <Block value={0} currency="USD"/>
    </div>
  )
}

export default App

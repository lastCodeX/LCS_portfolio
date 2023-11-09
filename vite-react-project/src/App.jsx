import Block from "./Components/Block"
import './App.scss'
import { useEffect, useState } from "react"

function App() {
  const [rates, setRates] = useState({})

  useEffect(()=>{
    fetch('https://www.cbr-xml-daily.ru/latest.js').then((res)=>res.json()).then((json)=>{
      setRates(json.rates)
      console.log(json.rates)
    }).catch((err)=>{
      console.warn(err)
      alert('Не удалось получить информацию!')
    })
  }, [])

  return (
    <div className='App'>
      <Block value={0} currency="RUB"/>
      <Block value={0} currency="USD"/>
    </div>
  )
}

export default App

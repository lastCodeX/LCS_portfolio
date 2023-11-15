import Block from "./Components/Block"
import './App.scss'
import { useEffect, useState } from "react"

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js').then((res) => res.json()).then((json) => {
      json.rates['RUB'] = 1
      setRates(json.rates)
      console.log(json.rates)
    }).catch((err) => {
      console.warn(err)
      alert('Не удалось получить информацию!')
    })
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value * rates[fromCurrency]
    const result = price / rates[toCurrency]
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    const price = value * rates[toCurrency]
    const result = price / rates[fromCurrency]
    setFromPrice(result)
    setToPrice(value)
  }

  return (
    <div className='App'>
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
    </div>
  )
}

export default App

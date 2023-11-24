import Block from "./Components/Block"
import './App.scss'
import { useEffect, useState, useRef} from "react"

function App() {
  // const [rates, setRates] = useState({})
  const ratesRef = useRef({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js').then((res) => res.json()).then((json) => {
      json.rates['RUB'] = 1
      // setRates(json.rates)
      ratesRef.current = json.rates
      onChangeToPrice(1)
    }).catch((err) => {
      console.warn(err)
      alert('Не удалось получить информацию!')
    })
  }, [])

  useEffect(()=>{
    onChangeFromPrice(fromPrice)

  }, [fromCurrency, fromPrice])

  useEffect(()=>{
    onChangeToPrice(toPrice)
  }, [toCurrency, toPrice])

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency]
    const result = price * ratesRef.current[toCurrency]
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
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

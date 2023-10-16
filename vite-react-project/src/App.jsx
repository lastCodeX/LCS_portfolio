import {useState} from 'react'
import Result from './Components/Result'
import Game from './Components/Game'
import './App.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
]

function App() {

  const [step, setStep] = useState(0)
  const question = questions[step]
  const progressVol = Math.round(step/questions.length*100)

  const choiceOption = (variant)=>{
    setStep(step+1)
  }
  
  return (
    <div className='App'>
            {step != questions.length ? <Game question={question} choiceOption={choiceOption} progressVol={progressVol}/> : <Result/>}
    </div>
  )
}

export default App

import './Game.scss'

const Game = ({question, choiceOption, progressVol})=>{

    

     return (
        <>
            <div className='progress'>
                <div style={{width: `${progressVol}%`}} className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, variant)=>{
                        return (
                            <li key={text} onClick={()=>{
                                choiceOption(variant)
                            }}>{text}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Game
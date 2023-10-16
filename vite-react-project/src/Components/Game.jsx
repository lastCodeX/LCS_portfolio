import './Game.scss'

const Game = ()=>{
    return (
        <>
            <div className='progress'>
                <div style={{width: '50%'}} className='progress__inner'></div>
            </div>
            <h1>что такое useState?</h1>
            <ul>
                <li>Это функция для хранения данных</li>
                <li>Это глобальный стейт</li>
                <li>Это когда нах ты никому не нужен</li>
            </ul>
        </>
    )
}

export default Game
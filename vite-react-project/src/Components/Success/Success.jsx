import './Success.scss'

const Success = () => {
    return (
        <div className="success-block">
            <img src="./src/assets/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем пользователям отправлено приглашение.</p>
            <button className="send-invite-btn">Назад</button>
        </div>
    )
}

export default Success
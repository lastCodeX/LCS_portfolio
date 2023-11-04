import Skeleton from './../Skeleton/Skeleton'
import User from './../User/User'
import './Users.scss'

const Users = ({
    isLoading,
    items,
    searchValue,
    onChangeSearchValue,
    invites,
    onClickInvite}) => {
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} onChange={onChangeSearchValue} name="search" type="text" placeholder="Найти пользователя ..." />
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className="user-list">
                    {
                    items.filter((obj)=>{
                        const full_name = (obj.first_name + obj.last_name).toLowerCase()
                        return (
                            full_name.includes(searchValue.toLowerCase()) || 
                            obj.email.toLowerCase().includes(searchValue.toLowerCase())
                        )
                    }).map(obj=><User isInvited={invites.includes(obj.id)} onClickInvite={onClickInvite} key={obj.id} {...obj}/>)
                    }
                </ul>
            )}
            <button className="send-invite-btn">Отправить приглашение</button>
        </>
    )
}

export default Users
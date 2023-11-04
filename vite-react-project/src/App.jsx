import { useEffect, useState } from 'react'
import './App.scss'
import Success from './Components/Success/Success'
import Users from './Components/Users/Users'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  

  useEffect(()=>{
    fetch('https://reqres.in/api/users').then((res)=>res.json()).then((json)=>{
      setUsers(json.data)
    }).catch((err)=>{
      console.warn(err)
      alert('Ошибка загрузки пользователей!')
    }).finally(()=>setIsLoading(false))
  },[])

  const onChangeSearchValue = (event)=>{
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id)=>{
    if(invites.includes(id)){
      setInvites(prev => prev.filter(_id => _id != id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = ()=>{
    setSuccess(true)
  }

  return (
    <div className='App'>
      {success ? <Success count={invites.length}/> : 
        <Users 
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        isLoading={isLoading}
        items={users}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites={onClickSendInvites}
      />
    }
      
    </div>
  )
}

export default App

import {React , useState} from 'react'

export default function Login(){
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    const changeUserName = (e) => {
        setuserName(e.target.value)
    }


    const changepassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(userName, password)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={changeUserName} value={userName} placeholder='User Name'/>
                <input type='password' onChange={changepassword} value={password} placeholder='Password'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
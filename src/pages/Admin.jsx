import { useState, useEffect } from 'react'
import AdminHome from '../components/AdminHome'
import LogInForm from '../components/LogInForm'

const Admin = () => {
    const [logIn, setLogIn] = useState(false)

    const promptLogOut = () => {
        let prompt = window.confirm('Are you still working?')
        !prompt && setLogIn(false)
    }
    
    useEffect(() => {
        if (logIn) {
            console.log('will work')
            let timeOut = setInterval(()=>promptLogOut(),30000)
            return () => {
                clearInterval(timeOut)
            }
        } else {
            console.log('will not work.')
        }

    }, [logIn])

    

    return (
        <div>
            {logIn?<AdminHome logIn={logIn}/>:<LogInForm success={user=>setLogIn(user)}/>}
        </div>
    )
}

export default Admin
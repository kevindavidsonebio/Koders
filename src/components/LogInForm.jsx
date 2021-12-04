import { TextField, Container, makeStyles } from "@material-ui/core"
import { useRef } from "react"
import users from "./users"

const useStyles = makeStyles(theme=>({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px'
    },
    textInput: {
        marginTop: '30px'
    },
    submit: {
        marginTop: '30px',
        width: '100%',
        background: '#a3cb38',
        '&:hover': '#7f9c2d',
        '&:active': '#a3cb38'
    }
}))


const LogInForm = ({success}) => {
    const classes = useStyles()
    
    const username = useRef('')
    const password = useRef('')
    
    const submitForm = e => {
        e.preventDefault()
        let logInAttempt = {
            username: username.current.lastChild.lastChild.value.trim(),
            password: password.current.lastChild.lastChild.value.trim()
        }
        console.log(logInAttempt)
        console.log(users)
        let mappedArray = users.map(u=>u.username)
        console.log('========')
        console.log(mappedArray)
        console.log(logInAttempt.username === users[0].username)
        let filteredArr = users.filter(u=>u.username === logInAttempt.username)
        
        console.log(filteredArr)
        if(filteredArr.length !== 0) {
            if(filteredArr[0].password === logInAttempt.password){
                console.log('pass')
                success(filteredArr[0])
            } else {
                console.log('Log-in unsuccessful. Password Mismatch')
            }
        } else {
            console.log('Log-in unsuccessful. User not found.')            
        }
    }


    return (
        <form onSubmit={submitForm}>
            <Container className={classes.container}>
                <TextField variant="filled" name="username" className={classes.textInput} label="Username" ref={username} required/>
                <TextField variant="filled" name="password" className={classes.textInput} label="Password" type="password" ref={password} required/>
                <TextField variant="filled" name="submit" className={classes.submit} type="submit" value="Log-in"/> 
            </Container>
        </form>
    )
}

export default LogInForm

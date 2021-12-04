import CareersForm from "../components/CareersForm"
import TopContent from "../components/TopContent"
import HiringProcess from "../components/HiringProcessContainer"
import { useState } from "react"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    hiringProcessButton: {
        display: 'block',
        margin: '30px auto',
        height: '50px',
        width: '250px',
        cursor: 'pointer',
        background: '#a3cb38',
        '&:hover': {
            background: '#7f9c2d'
        },
        '&:active': {
            background: '#a3cb38'
        }
    }
}))

const Careers = () => {
    const classes = useStyles()
    const [hiringProcess, setHiringProcess] = useState(false)
    return (
        <>
            <TopContent 
                main = "Got some coding skills?"
                sub = "If you think you have what it takes to be a full-time Web Developer,"
                buttonText = "BE A KODER!!!"
                buttonOn = {!hiringProcess}
                buttonOff = {state=>setHiringProcess(state)}
                buttonAlt = "Scroll down"
            />
            <HiringProcess />
            {hiringProcess ? <CareersForm />: <Button className={classes.hiringProcessButton} onClick={()=>setHiringProcess(true)}>Start Hiring Process</Button>}
        </>
    )
}

export default Careers
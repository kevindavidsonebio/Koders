import { Grid, TextField, makeStyles, Typography} from "@material-ui/core"
import { useRef, useState } from "react"

const useStyles = makeStyles(theme=>({
    textFields: {
        width: '100%'
    },
    container: {
        maxWidth: '960px',
        display: 'block',
        margin: '8px auto'
    },
    submit: {
        width: '100%',
        background: '#a3cb38',
        '&:hover': '#7f9c2d',
        '&:active': '#a3cb38'
    }
}))

const CareersForm = () => {
    const classes = useStyles()
    
    const [submitted, setSubmitted] = useState(false)

    const fName = useRef('')
    const mName = useRef('')
    const lName = useRef('')
    const address = useRef('')
    const email = useRef('')
    const contactNumber = useRef('')
    const birthdate = useRef('')
    const onlinePortfolio = useRef('')
    const resume = useRef('')
    const coverLetter = useRef('')

    const submitForm = e => {
        // e.preventDefault() 
        let applicant = {
            id: `${new Date().getTime()}-${lName.current.lastChild.lastChild.value}-${fName.current.lastChild.lastChild.value[0]}`,
            firstName: fName.current.lastChild.lastChild.value.trim(),
            middleName: mName.current.lastChild.lastChild.value.trim(),
            lastName: lName.current.lastChild.lastChild.value.trim(),
            address: address.current.lastChild.lastChild.value.trim(),
            email: email.current.lastChild.lastChild.value.trim(),
            contactNumber: contactNumber.current.lastChild.lastChild.value.trim(),
            birthdate: birthdate.current.lastChild.lastChild.value,
            onlinePortfolio: onlinePortfolio.current.lastChild.lastChild.value.trim(),
            resume: resume.current.lastChild.lastChild.value,
            coverLetter: coverLetter.current.lastChild.firstChild.value.trim()
        }

        const regExName = /((?!\.)(?=\S)\W)|\d/g
        if (regExName.test(applicant.firstName)) {
            alert('First Name may not contain numbers and special characters.')
            e.preventDefault() 
            return false
        }

        if (regExName.test(applicant.middleName)) {
            alert('Middle Name may not contain numbers and special characters.')
            e.preventDefault() 
            return false
        }

        if (regExName.test(applicant.lastName)) {
            alert('Last Name may not contain numbers and special characters.')
            e.preventDefault() 
            return false
        }

        if ((applicant.birthdate < new Date(1900, 0) || applicant.birthdate > new Date())) {
            alert('Invalid Date. Please select your birthdate.')
            e.preventDefault() 
            return false
        }

        const regExNumber = /^09[0-9]{9}$/

        if (!regExNumber.test(applicant.contactNumber)) {
            alert('Invalid Contact Number provided. Please follow this format: 09XXXXXXXXX')
            e.preventDefault() 
            return false
        }

        let applicantsList = JSON.parse(localStorage.getItem('applicantsList')) || []
        applicantsList.push(applicant)
        console.log('here')
        // console.log(coverLetter.current.lastChild.firstChild.value)

        console.log(JSON.stringify(applicantsList))
        console.log(`Pushing to Local Storage`)
        localStorage.setItem('applicantsList',JSON.stringify(applicantsList))
        console.log(`Data Submitted`)
        setSubmitted(true)
        // localStorage.setItem('applicantsList',JSON.stringify(updatedList))

    }

    return (
        <form action="/submitted" name="careersForm" id="applicationForm" className={classes.container} onSubmit={submitForm}>
            {submitted?<Typography variant="h3">You have already submitted the form.</Typography>:
            <Grid container spacing={1} >
                <Grid item xs={12} md={4}>
                    <TextField className={classes.textFields} variant="filled" name="fName" required label="First Name" ref={fName} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.textFields} variant="filled" name="mName" label="Middle Name" ref={mName} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField className={classes.textFields} variant="filled" name="lName" required label="Last Name" ref={lName} />
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.textFields} variant="filled" name="address" label="Address" ref={address} required/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField className={classes.textFields} variant="filled" name="email" required type="email" label="E-mail" ref={email} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField className={classes.textFields} variant="filled" name="contactNumber" required type="text" label="Contact Number" ref={contactNumber}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField className={classes.textFields} variant="filled" name="birthdate" required type="date" label="Birthdate" ref={birthdate} InputLabelProps={{shrink:true}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.textFields} variant="filled" name="portfolio" type="url" label="Online Portfolio Link" placeholder="Not required but highly encouraged" ref={onlinePortfolio}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.textFields} variant="filled" name="resume" type="file" label="Resume" required ref={resume} InputLabelProps={{shrink:true}}/>   
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.textFields} variant="filled" name="coverLetter" label="Cover Letter" ref={coverLetter} multiline placeholder="Why should we hire you?"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField className={classes.textFields} variant="filled" type="reset"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField className={classes.submit} classes={[]} variant="filled" type="submit" value="BE A KODER!!"/>
                </Grid>
            </Grid>
            }
        </form>
    )
}

export default CareersForm

import { Container, Typography } from "@material-ui/core"
import { useState, useEffect } from "react"
import UserInteraction from "./UserInteraction"

const AdminHome = ({logIn}) => {
    const [applicants, setApplicants] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        let rawData = JSON.parse(localStorage.getItem('applicantsList'))
        setApplicants(rawData)
    },[])

    useEffect(() => {
        let rawData = JSON.parse(localStorage.getItem('contactus'))
        console.log(rawData)
        setMessages(rawData)
    },[])

    useEffect(() => {
        localStorage.setItem('applicantsList',JSON.stringify(applicants))
    }, [applicants])

    useEffect(() => {
        localStorage.setItem('contactus',JSON.stringify(messages))
    }, [messages])

    const deleteApplicant = id => {
        setApplicants(applicants.filter(applicant=>applicant.id!==id))
    }

    const deleteMessage = id => {
        setMessages(messages.filter(message=>message.id!==id))
    }
    
    return (
        <Container>
            <Typography variant="h3">
                Welcome, {logIn.firstName}!
            </Typography>
            <Container>
                <Typography>
                    Applicants List
                </Typography>
                {applicants.map(applicant=>(
                    <UserInteraction
                        id={applicant.id}
                        name={`${applicant.firstName} ${applicant.lastName}`}
                        interaction={applicant.coverLetter}
                        email={applicant.email}
                        phone={applicant.contactNumber}
                        onlinePortfolio={applicant.onlinePortfolio}
                        resume={applicant.resume}
                        address={applicant.address}
                        birthdate={applicant.birthdate}
                        deleteApplicant={id=>deleteApplicant(id)}
                    />))}
            </Container>
            <Container>
                <Typography>
                    Message List
                </Typography>
                {messages.map(applicant=>(
                    <UserInteraction
                        id={applicant.id}
                        name={`${applicant.firstName} ${applicant.lastName}`}
                        interaction={applicant.message}
                        email={applicant.email}
                        deleteApplicant={id=>deleteMessage(id)}
                    />))}
            </Container>
        </Container>
    )
}

export default AdminHome

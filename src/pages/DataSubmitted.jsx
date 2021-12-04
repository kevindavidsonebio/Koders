import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const DataSubmitted = () => {
    return (
        <Typography variant="h3">
            Thank you for submitting the form. We will get back with you as soon as we can. You may now go back to our <Link to="/" >homepage</Link>
        </Typography>
    )
}

export default DataSubmitted

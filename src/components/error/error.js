import './error.scss'

import error from './error.gif'

const Error = props => {
    return (
        <img src={error} alt="error" className={`error ${props.className}`} />
    )
}

export default Error
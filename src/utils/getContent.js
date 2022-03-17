import Spinner from "../components/spinner/spinner"
import Error from "../components/error/error"

const getContent = (process, Component, data=null) => {
    switch (process) {
        case 'waiting': 
            return <Component {...data} />
        case 'fetching':
            return <Spinner />
        case 'error':
            return <Error />
    }
}

export default getContent
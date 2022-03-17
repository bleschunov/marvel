import { useState } from 'react'

const useHttp = () => {
    const [process, setProcess] = useState('waiting')

    async function getResource(url) {
        setProcess('fetching')

        let res
        try {
            res = await fetch(url)

            if (!res.ok && res.status !== 404) {
                throw new Error(`Could not fetch ${url}, status is ${res.status}`)
            }

            setProcess('waiting')
            return await res.json()
        } catch (error) {
            console.log(error)
            setProcess('error')
        }
    }

    return {getResource, process}
}

export default useHttp
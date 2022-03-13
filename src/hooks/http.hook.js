import { useState } from 'react'

const useHttp = () => {
    const
        [loading, setLoading] = useState(true),
        [error, setError] = useState(false)

    async function getResource(url) {
        setLoading(true)
        setError(false)

        try {
            const res = await fetch(url)

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status is ${res.status}`)
            }

            setLoading(false)
            return await res.json()
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    return {loading, error, getResource}
}

export default useHttp
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMarvelService from '../../../services/marvelService'

import AppBanner from '../../appBanner/appBanner'
import Error from '../../error/error'
import Spinner from '../../spinner/spinner'

const SinglePage = ({Component, dataType}) => {
    const [data, setData] = useState(false)
    const 
        navigate = useNavigate(),
        { id } = useParams(),
        {loading, error, getCharacter, getComic} = useMarvelService()
    
    let getFunc;
    switch (dataType) {
        case 'comics':
            getFunc = getComic
            break
        case 'characters':
            getFunc = getCharacter
            break
    }

    useEffect(async () => updateData(id), [])

    async function updateData(id) {
        setData( await getFunc(id) )
    }

    function renderView() {
        if (loading) return <Spinner />
        else if (error) return <Error />
        else return <Component data={data} navigate={navigate} />
    }

    return (
        <>
            <AppBanner className="app__appBanner" />
            {renderView()}
        </>
    )
}

export default SinglePage
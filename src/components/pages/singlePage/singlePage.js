import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMarvelService from '../../../services/marvelService'

import AppBanner from '../../appBanner/appBanner'
import Error from '../../error/error'
import Spinner from '../../spinner/spinner'

const SinglePage = ({Component, dataType}) => {
    const [char, setChar] = useState(false)
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

    useEffect(async () => updateChar(id), [])

    async function updateChar(id) {
        setChar( await getFunc(id) )
    }

    function renderView() {
        if (loading) return <Spinner />
        else if (error) return <Error />
        else return <Component char={char} navigate={navigate} />
    }

    return (
        <>
            <AppBanner className="app__appBanner" />
            {renderView()}
        </>
    )
}

export default SinglePage
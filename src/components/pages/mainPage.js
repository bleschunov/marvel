import { useState } from 'react'
import Helmet from 'react-helmet'

import ErrorBoundary from "../errorBoundary/errorBoundary"
import RandomChar from "../randomChar/randomChar"
import CharList from "../charList/charList"
import InfoSkeleton from "../infoSkeleton/infoSkeleton"
import CharInfo from "../charInfo/charInfo"
import SearchForm from '../searchForm/searchForm'

import vision from '../../resources/images/vision.png'

const MainPage = () => {
    const [selectedCharId, setSelectedCharId] = useState(null)

    function onSelectChar(selectedCharId) {
        setSelectedCharId(selectedCharId)
    }

    function renderInfo() {
        if (selectedCharId) {
            return <CharInfo selectedCharId={selectedCharId} className="app__charInfo" />
        } else {
            return <InfoSkeleton className="app__charInfo" />
        }
    }

    return (
        <>
            <Helmet>
            <meta
                name="description"
                content="Marvel information portal" />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar className="app__randomChar" />
            </ErrorBoundary>
            <div className="app__charContent">
                <ErrorBoundary>
                    <CharList onSelectChar={onSelectChar} className="app__charList" /> 
                </ErrorBoundary>
                
                    <div className="app__sidebar">
                        <ErrorBoundary>
                            {renderInfo()}
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SearchForm className="app__searchForm" />
                        </ErrorBoundary>
                    </div>
                
            </div>
            <img src={vision} alt="vision" className="app__vision" />
        </>
    )
}

export default MainPage
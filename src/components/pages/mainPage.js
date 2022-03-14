import { useState } from 'react'

import ErrorBoundary from "../errorBoundary/errorBoundary"
import RandomChar from "../randomChar/randomChar"
import CharList from "../charList/charList"
import InfoSkeleton from "../infoSkeleton/infoSkeleton"
import CharInfo from "../charInfo/charInfo"

import vision from '../../resources/images/vision.png'

const MainPage = () => {
    const [selectedCharId, setSelectedCharId] = useState(null)

    function onSelectChar(selectedCharId) {
        setSelectedCharId(selectedCharId)
    }

    function renderSideBar() {
        if (selectedCharId) {
            return <CharInfo selectedCharId={selectedCharId} className="app__charInfo" />
        } else {
            return <InfoSkeleton className="app__charInfo" />
        }
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar className="app__randomChar" />
            </ErrorBoundary>
            <div className="app__charContent">
                <ErrorBoundary>
                <CharList onSelectChar={onSelectChar} className="app__charList" /> 
                </ErrorBoundary>
                <ErrorBoundary>
                {renderSideBar()}
                </ErrorBoundary>
            </div>
            <img src={vision} alt="vision" className="app__vision" />
        </>
    )
}

export default MainPage
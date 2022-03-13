import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react'
import './app.scss';

import AppHeader from '../appHeader/appHeader'
import RandomChar from '../randomChar/randomChar'
import CharList from '../charList/charList'
import CharInfo from '../charInfo/charInfo'
import InfoSkeleton from '../infoSkeleton/infoSkeleton'
import AppBanner from '../appBanner/appBanner'
import ComicList from '../comicList/comicList'
import ComicPage from '../comicPage/comicPage'
import ErrorBoundary from '../errorBoundary/errorBoundary';

import vision from '../../resources/images/vision.png'

const App = () => {
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
    <Router>
      <div className="app">
        <AppHeader className="app__header" />
        <main>
      
          <Route exact path="/">
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
          </Route>
          <Route exact path="/comics">
            <AppBanner className="app__appBanner" />
            <ComicList className="app_comicList" />
          </Route>
        
        </main>
      </div>
    </Router>
  )
}

export default App;

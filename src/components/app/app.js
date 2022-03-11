import { Component } from 'react'
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

class App extends Component {
  state = {
    selectedCharId: null
  }

  onSelectChar = selectedCharId => {
    this.setState({
      selectedCharId
    })
  }

  render() {
    let charInfo
    if (this.state.selectedCharId) {
      charInfo = <CharInfo selectedCharId={this.state.selectedCharId} className="app__charInfo" />
    } else {
      charInfo = <InfoSkeleton className="app__charInfo" />
    }

    return (
      <div className="app">
        <AppHeader className="app__header" />
        <main>
          <ErrorBoundary>
            <RandomChar className="app__randomChar" />
          </ErrorBoundary>
          <div className="app__charContent">
            <ErrorBoundary>
              <CharList onSelectChar={this.onSelectChar} className="app__charList" /> 
            </ErrorBoundary>
            <ErrorBoundary>
              {charInfo}
            </ErrorBoundary>
          </div>
          <img src={vision} alt="vision" className="app__vision" />
        </main>
      </div>
      
      // <div className="app">
      //   <AppHeader className="app__header" />
      //   <main>
      //     <AppBanner className="app__appBanner" />
      //     {/* <ComicList className="app__comicList" /> */}
      //     <ComicPage className="app__comicPage" />
      //   </main>
      // </div>
    );
  }
}

export default App;

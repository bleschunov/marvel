import './app.scss';

import AppHeader from '../appHeader/appHeader'
import RandomChar from '../randomChar/randomChar'
import CharList from '../charList/charList'
import CharInfo from '../charInfo/charInfo'
import InfoSkeleton from '../infoSkeleton/infoSkeleton'
import AppBanner from '../appBanner/appBanner'
import ComicList from '../comicList/comicList'
import ComicPage from '../comicPage/comicPage'

import vision from '../../resources/images/vision.png'

function App() {
  return (
    // <div className="app">
    //   <AppHeader className="app__header" />
    //   <main>
    //     <RandomChar className="app__randomChar" />
    //     <div className="app__charContent">
    //       <CharList className="app__charList" />  
    //       {/* <CharInfo className="app__charInfo" /> */}
    //       <InfoSkeleton className="app__charInfo" />
    //     </div>
    //     <img src={vision} alt="vision" className="app__vision" />
    //   </main>
    // </div>
    <div className="app">
      <AppHeader className="app__header" />
      <main>
        <AppBanner className="app__appBanner" />
        {/* <ComicList className="app__comicList" /> */}
        <ComicPage className="app__comicPage" />
      </main>
    </div>
  );
}

export default App;

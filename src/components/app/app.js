import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'

import AppHeader from '../appHeader/appHeader'

import {
  MainPage, 
  ComicsPage, 
  SingleComicPage, 
  Page404 
} from '../pages'


const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader className="app__header" />
        <main>
          <Routes>
            <Route path="/marvel" element={<MainPage />} />
            <Route path="/marvel/comics" element={<ComicsPage />} />
            <Route path="marvel/comics/:id" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;

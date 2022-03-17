import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './app.scss'

import AppHeader from '../appHeader/appHeader'
import SingleCharLayout from '../pages/singlePage/singleCharLayout'
import SingleComicLayout from '../pages/singlePage/singleComicLayout'

import {
  MainPage, 
  ComicsPage, 
  SinglePage,
  Page404 
} from '../pages'

// const 
//   MainPage = lazy(() => import('../pages/mainPage')),
//   ComicsPage = lazy(() => import('../pages/comicsPage')),
//   SingleComicPage = lazy(() => import('../pages/singleComicPage/singleComicPage')),
//   Page404 = lazy(() => import('../pages/page404/page404'))

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader className="app__header" />
        <main>
          <Routes>
            <Route path="/marvel" element={<Navigate to="characters" />} />
            <Route path="/marvel/characters" element={<MainPage />} />
            <Route path="/marvel/comics" element={<ComicsPage />} />
            <Route 
              path="marvel/characters/:id" 
              element={<SinglePage Component={SingleCharLayout} dataType="characters" />} />
            <Route 
              path="marvel/comics/:id" 
              element={<SinglePage Component={SingleComicLayout} dataType="comics" />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;

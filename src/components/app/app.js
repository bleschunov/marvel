import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './app.scss'

import AppHeader from '../appHeader/appHeader'
import Spinner from '../spinner/spinner'

const 
  MainPage = lazy(() => import('../pages/mainPage')),
  ComicsPage = lazy(() => import('../pages/comicsPage')),
  SinglePage = lazy(() => import('../pages/singlePage/singlePage')),
  Page404 = lazy(() => import('../pages/page404/page404')),
  SingleCharLayout = lazy(() => import('../pages/singlePage/singleCharLayout')),
  SingleComicLayout = lazy(() => import('../pages/singlePage/singleComicLayout'))


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader className="app__header" />
        <main>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;

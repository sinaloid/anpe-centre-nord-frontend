
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ForumPage from './pages/forum/ForumPage'
import ActualitePage from './pages/actualite/ActualitePage'
import OffrePage from './pages/offre/OffrePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/offres' element={ <OffrePage />} />
      <Route path='/actualites' element={ <ActualitePage />} />
      <Route path='/forum' element={ <ForumPage />} />
    </Routes>
     
    </>
  )
}

export default App

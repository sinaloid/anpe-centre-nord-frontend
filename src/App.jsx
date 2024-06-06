
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ForumPage from './pages/forum/ForumPage'
import ActualitePage from './pages/actualite/ActualitePage'
import OffrePage from './pages/offre/OffrePage'
import Dashboard from './dashboard/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/offres' element={ <OffrePage />} />
      <Route path='/actualites' element={ <ActualitePage />} />
      <Route path='/forum' element={ <ForumPage />} />
      <Route path='/dashboard' element={ <Dashboard />} />
    </Routes>
     
    </>
  )
}

export default App

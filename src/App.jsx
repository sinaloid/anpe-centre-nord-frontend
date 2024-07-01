
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ForumPage from './pages/forum/ForumPage'
import ActualitePage from './pages/actualite/ActualitePage'
import OffrePage from './pages/offre/OffrePage'
import Dashboard from './dashboard/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import VerifyOtp from './pages/auth/VerifyOtp'
import ResetPassword from './pages/auth/ResetPassword'
import Verify2Fa from './pages/auth/Verify2Fa'
import RessourceConseilPage from './pages/ressource/RessourceConseilPage'
import GenerateOtp from './pages/auth/GenerateOtp'
import AproposPage from './pages/apropos/AproposPage'
import OffreDetailPage from './pages/offre/OffreDetailPage'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/offres' element={ <OffrePage />} />
      <Route path='/offres/:slug' element={ <OffreDetailPage />} />
      <Route path='/actualites' element={ <ActualitePage />} />
      <Route path='/forum' element={ <ForumPage />} />
      <Route path='/ressources-conseils' element={ <RessourceConseilPage />} />
      <Route path='/a-propos' element={ <AproposPage />} />
      <Route path='/connexion' element={ <Login />} />
      <Route path='/inscription' element={ <Register />} />
      <Route path='/verification-du-code-otp' element={ <VerifyOtp />} />
      <Route path='/validation-du-code-otp/:slug/:otp' element={ <VerifyOtp />} />
      <Route path='/mot-de-passe-oublie' element={ <GenerateOtp />} />
      <Route path='/modification-du-mot-de-passe' element={ <ResetPassword />} />
      <Route path='/authentification-a-2-facteurs' element={ <Verify2Fa />} />
      <Route path='/validation-du-code-a-2-facteurs/:slug/:otp' element={ <Verify2Fa />} />

      
      <Route path='/dashboard/*' element={ <Dashboard />} />
    </Routes>
     
    </>
  )
}

export default App

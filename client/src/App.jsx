import './App.css'
import NavBar from './components/NavBar/NavBar'
import Detail from './components/Detail/Detail'
import Landing from './components/Landing/Landing'
import Activities from "./components/Activities/Activities"
import Form from "./components/Form/Form"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
 

  return (
    <>
    <NavBar />
     <Routes>
     
      <Route path='/' element = { <Landing /> } />
      <Route path='/home' element = { <Home />} />
      <Route path='/activities' element = { <Activities />} />
      <Route path='/detail/:countryKey' element = { <Detail />} />
      <Route path='/createActivity' element={ <Form/>} />
     </Routes>

     
    </>
  )
}

export default App

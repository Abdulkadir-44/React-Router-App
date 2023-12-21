import { Route,Routes } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Login from './pages/Login'


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/faqs' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default App

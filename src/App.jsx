import './App.css'
import { Routes, Route } from 'react-router-dom'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Eve from './pages/Eve'
import Dinner from './pages/Dinner'
import Fullday from './pages/Fullday'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/evening' element={<Eve />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='fulldaymeal' element={<Fullday />} />
      </Routes>
    </>
  )
}

export default App

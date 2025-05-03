import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Home from './pages/Home'
// import Sobre from './pages/Sobre'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/sobre" element={<Sobre />} /> */}
    </Routes>
  )
}
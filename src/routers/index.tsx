import { Route, Routes } from 'react-router-dom'
import { Login, Home } from '../layouts/index.ts'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Routers

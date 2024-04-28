import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/Products/ProductsPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>

          {/* Protected Route */}
          <Route element>

          </Route>
          <Route path='products' element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

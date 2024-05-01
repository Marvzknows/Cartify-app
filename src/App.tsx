import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/Products/ProductsPage'
import UserProvider from './Context/UserContext'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>

          {/* Protected Route */}
          {/* <Route element>

          </Route> */}
          <Route path='products' element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>

  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/Products/ProductsPage'
import UserProvider from './Context/UserContext'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path='products' element={<ProductsPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </UserProvider>

  )
}

export default App

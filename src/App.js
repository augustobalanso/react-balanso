import './App.css';
import { Blog } from './pages/Blog';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import { Cart } from './components/Cart/Cart'
import NavBar from './components/NavBar/navbar.js';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Theme/theme.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ordenes } from './pages/Ordenes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CartProvider>
            <NavBar />

            <Container>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/:category' element={<ItemListContainer />} />
                <Route path='/:category/:id' element={<ItemDetailContainer />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/Ordenes' element={<Ordenes />} />
              </Routes> 
            </Container>
          </CartProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

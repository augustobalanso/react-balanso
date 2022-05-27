import './App.css';
import { Homepage } from './pages/Homepage';
import { Blog } from './pages/Blog';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import NavBar from './components/NavBar/navbar.js';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Theme/theme.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <NavBar />

          <Container>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/Productos' element={<ItemListContainer />} />
              <Route path='/Blog' element={<Blog />} />
            </Routes>
            <ItemDetailContainer />  
          </Container>
          
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

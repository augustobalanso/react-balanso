import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer.js'
import NavBar from './components/NavBar/navbar.js';
import { Container } from '@mui/material';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
          <ItemListContainer />
      </Container>
    </div>
  );
}

export default App;

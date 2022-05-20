import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/navbar.js';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Grid container>
          <ItemListContainer />
        </Grid>
      </Container>
    </div>
  );
}

export default App;

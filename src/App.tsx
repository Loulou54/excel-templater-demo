import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Container } from '@mui/material';
import Demo from './pages/Demo';

const App = () => {
  return (
    <Container>
      <Header/>
      <LandingPage/>
      <Demo/>
    </Container>
  );
};

export default App;

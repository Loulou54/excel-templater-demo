import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Container } from '@mui/material';
import Demo from './pages/Demo';
import Footer from './components/Footer';
import Banner from './components/Banner';
import CallToAction from './pages/CallToAction';

const App = () => {
  return (<>
    <Header/>
    <Banner/>
    <Container>
      <LandingPage/>
      <Demo/>
      <CallToAction/>
    </Container>
    <Footer/>
  </>);
};

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage';
import Section from './components/Section';
import Divider from '@mui/material/Divider';
function App() {
  return (
    <>
 <Navbar />
 <HeroImage/>
 <Divider />
 <Section albumsSection type='top' /> 
 <Divider />
 <Section albumsSection type='new' /> 
 <Divider />
 <Section songsSection />
 </>
  );
}

export default App;

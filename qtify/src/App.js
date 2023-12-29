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
 <Section type='top'  isCollapse={false}/> 
 <Divider />
 <Section type='new' isCollapse={false} /> 
 </>
  );
}

export default App;

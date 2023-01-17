import './App.css';
import { Route,Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './routerComponents/Home';
import About from './routerComponents/About';
import Services from './routerComponents/Services';
import Contact from './routerComponents/Contact';
import Navbar from './routerComponents/Navbar';
import Footer from './routerComponents/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='Services' element={<Services/>}>About</Route>
        <Route path='About' element={<About/>}>Portfolio</Route>
        <Route path='contact' element={<Contact/>}>Contact</Route>
      </Routes>
      <Footer/>
      <br/><br/>
    </>
  );
}
export default App;
import logo from './assets/Code X GitHub Badge Black.png';
import './App.css';
import Landing from './Components/Heading/Landing';
import Section_tv from './Components/Sections/Section_tv';
import Offline from './Components/Offline/Offline'
import Watch from './Components/Watch/Watch';
import Kids from './Components/Kids/Kids';
import FAQ from './Components/Faq/FAQ';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
     <header>
      <Landing/>
    </header> 
    <main>
       <Section_tv/>
      <Offline/>
      <Watch/>
      <Kids/>
      <FAQ/>
   </main>
    <footer>
    <Footer/>                                                                                             
   </footer> 
     
    </>
  );
}

export default App;

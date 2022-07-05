import logo from './assets/Code X GitHub Badge Black.png';
import './App.css';
import Landing from './Views/Heading/Landing';
import Section_tv from './Views/Sections/Section_tv';
import Offline from './Views/Offline/Offline'
import Watch from './Views/Watch/Watch';
import Kids from './Views/Kids/Kids';
import FAQ from './Views/Faq/FAQ';
import Footer from './Views/Footer/Footer';

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

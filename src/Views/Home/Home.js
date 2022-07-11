import React from 'react'
import FAQ from '../Faq/FAQ'
import Footer from '../Footer/Footer'
import Landing from '../Heading/Landing'
import Kids from '../Kids/Kids'
import Offline from '../Offline/Offline'
import Section_tv from '../Sections/Section_tv'
import Watch from '../Watch/Watch'
import classes from './home.module.css'

 const Home = () => {
  return (
    <div>
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
    </div>
    
  )
}
export default Home

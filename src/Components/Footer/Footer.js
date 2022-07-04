import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
  return (
    <>
    <section className={classes.grid}>
    <ul>
    <li>Questions? Contact Us</li>
    
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Investor Relations</a></li>
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Speed Test</a></li>
    <li><a href="#">Que Nigeria</a></li>
    </ul>
    <ul>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Cookie Preferences</a></li>
    <li><a href="#">Legal Notice</a></li>
    </ul>
    <ul>
    <li><a href="#">Account</a></li>
    <li><a href="#">Ways to Watch</a></li>
    <li><a href="#">Coporate Information</a></li>
    <li><a href="#">Only on Netflix</a></li>
    </ul>
    <ul>
    <li><a href="#">Media Center</a></li>
    <li><a href="#">Terms of Use</a></li>
    <li><a href="#">Contact Us</a></li>
    </ul>
    </section>

    </>
  )
}
export default Footer

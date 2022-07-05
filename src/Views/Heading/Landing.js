import React from 'react'
import classes from './landing.module.css'

 const Landing = () => {
  return (
    <header  className={classes.heading}>
      <nav className={classes.nav}>
        <ul>
          <li>Que</li>
          <li><button><a href="#">Sign in</a></button></li>
        </ul>
      </nav>
      <section className={classes.landing}>
        <div>
        <h1>Unlimited Movies,TV shows and more</h1>
        <p>Watch anywhere.Cancel anytime</p>
        <p>Ready to Watch?Enter your email to create or restart your membership</p>
        <form action="">
        <input type="email" name="user_email" placeholder='Email Address'/>
        <button>Get Started &gt;</button>
         </form>
        </div>
      </section>
    </header>
  )
}
export default Landing

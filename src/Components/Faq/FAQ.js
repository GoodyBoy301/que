import {useState} from 'react'
import classes from './Faq.module.css'
import Faqlist from './Faqlist'

 export const faqs=[
    {
        id:1,
        question:"What is Que?",
        answer:"Que is a netflix clone",
        shown:false
    },
    {
        id:2,
        question:"How much does que cost?",
        answer:"Que cost nothing",
        shown:false
    },
    {
        id:3,
        question:"Where can i watch?",
        answer:"You can watch on your tv amd mobile device",
        shown:false
    },
    {
        id:4,
        question:"How do i cancel?",
        answer:"You cannot cancel",
        shown:false
    },
    {
        id:5,
        question:"What can I watch on Que?",
        answer:"Watch movies Tv Shows and season movies",
        shown:false
    },
    {
        id:6,
        question:"is Que Good For Kids?",
        answer:"Yes Que IS GOOD FOR KIDS",
        shown:false
    }
]

 const FAQ = () => {
    const faq = faqs.map(faq=>(
        <Faqlist key={faq.id}
         question=
    {faq.question}
    answer={faq.answer}
    shown={faq.shown}  />

    ))
    
   
  return (
    
    <section className={classes.grid}>
        <h2>Frequently asked Questions</h2>
        {faq}
        <p>Ready to Watch?Enter your email to create or restart your membership</p>
        <form action="">
        <input type="email" name="user_email" placeholder='Email Address'/>
        <button>Get Started &gt;</button>
        </form>
        
    </section>
  )
}
export default FAQ

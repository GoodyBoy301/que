import classes from './Faq.module.css'
import { useState } from 'react'

const Faqlist = (props) => {
    const {question,answer,shown}=props
    const[visible,setVisible]=useState(shown)
    const toggleVisibility= ()=>{
      setVisible(!visible)
    }
    
  return (
    <div className={classes.list}>
        <ul>
            <li onClick={toggleVisibility}>{question} <span>{visible?"-":"+"}</span>
            <p>{visible&& answer}</p>
            </li>
            
        </ul>
        </div>
  )
}
export default Faqlist

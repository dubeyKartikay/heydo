import React, { useState } from 'react'
import "./faqQAs.styles.scss"
import plus from "../../Assets/plus.png"
import minus from "../../Assets/minus.png"
export default function FAQqa({question,answer}) {
    const [expanded, setExpanded] = useState(false);
  return (
    <div id='faq-questions-section'>
        <div className='question'>
            <h2>{question}</h2>
            <div className='img-div'><img onClick={ () => { setExpanded( !expanded )} } src={ expanded ? minus:plus } alt="" /></div>
        </div>
        <div className= {`wrapper ${ expanded ? 'wrapper-clicked':'' }`} >
            <p >{answer}</p>
        </div>
    </div>
  )
}

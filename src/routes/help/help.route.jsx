import React from 'react'
import {QuestionAns} from '../../components/faqQAs/QAs'
import FAQqa from '../../components/faqQAs/faqQAa.component'
import "./help.styles.scss"
export default function Help() {
  return (
    <div id='Help-page'>
        <h1>FAQs</h1>
        {QuestionAns.map( (item,index)=>{
           return <FAQqa key={index} question={item.Question} answer = { item.Answer }/>
        } )}
    </div>
  )
}

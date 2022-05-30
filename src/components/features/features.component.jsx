import React from 'react'
import Feature from '../feature/feature.component'
import { FeaturesList } from './features'
import "./features.styles.scss"
export default function Features() {
  return (
    <div className='features-section'>
        <h1 style={{padding:"8rem"}}>Why should you consider us?</h1>
        <div className="features-container">
            {FeaturesList.map((feature,index)=><Feature key= {index} index = {index} feature={feature}/>)}
        </div>
    </div>
  )
}

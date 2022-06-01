import React from 'react'
import Feature from '../feature/feature.component'
import { FeaturesList } from './features'
import "./features.styles.scss"
export default function Features() {
  return (
    <div id='features-section'>
        <h1 className='heading' style={{padding:"8rem"}}>Why us?</h1>
        <div className="features-container">
            {FeaturesList.map((feature,index)=><Feature key= {index} index = {index} feature={feature}/>)}
        </div>
    </div>
  )
}

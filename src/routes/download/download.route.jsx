import React from 'react';
import "./download.styles.scss";
import downloadPageGIF from "../../Assets/output-onlinegiftools.gif";
import { Button } from '../../components/button/button.component';
export default function Download() {
  return (
    <div id='download-page'>
           
        <div>
            <h1>
                <span>Download </span>
                <br />
                Our
                App
            </h1>
            <Button buttonStyle='btn--primary' buttonSize='btn--large'>
                Windows 64-bit
            </Button>
            <p>Note: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, tenetur?</p>
        </div>
        <img src={downloadPageGIF} alt="" /> 
    </div>
  )
}

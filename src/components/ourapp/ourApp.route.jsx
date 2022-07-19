import React from 'react'
import video from "../../Assets/heyDoFinalVideo.mp4"
import ourAppimg from "../../Assets/img2.jpeg"
import "./ourApp.styles.scss"
export default function Ourapp() {
    return (
        <div id='our-app'>
            <h1 className='heading' >Our Application</h1>
            <div className="flex-container">
                <div>
                    <div className="para">
                        <h1>Intro</h1>
                        <p sty className='our-app-text'>
                            <li>Time is the most precious resource in today's world.</li>
                            <br />
                            <li>With HeydoTech, manual data entry work becomes automated, saving precious time.</li>
                        </p>
                    </div>
                    <video controls> <source src={video} type="video/mp4" /> </video>
                </div>
                <div>
                    <img style={{"maxWidth":"50%",borderRadius:"20px"}} src={ourAppimg} alt="" />
                    <div className="para">
                        <h1>Application Flow</h1>
                        <p sty className='our-app-text'>
                            <li>Your salesperson just needs to verify the details filled by your customer and Voila! It's done.</li>

                            <li>The bot automatically checks all the data, opens the portals, goes to the specific field and enters everything</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

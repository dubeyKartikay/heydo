import React from 'react'
import video from "../../Assets/heyDoFinalVideo.mp4"
import "./ourApp.styles.scss"
export default function Ourapp() {
    return (
        <div id='our-app'>
            <h1 className='heading' >Our Application</h1>
            <div className="flex-container">
                <div className="para">
                    <p>
                        Time can easily be called the most precious resource of the contemporary world. With HeydoTech, the task of filling up different forms becomes automated, henceforth saving precious time.
                        Heydo Tech reduces the manual backend data-entry workload in Automobile Showrooms. It automates the data to be entered in different portals using a bot.
                        The customer simply has to fill their minimal details online on their device which can be verified by the salesperson and all the data is fed into the portals then and there , reducing all the hassle.
                    </p>
                </div>
                <video controls> <source src={video} type="video/mp4" /> </video>
            </div>
        </div>
    )
}

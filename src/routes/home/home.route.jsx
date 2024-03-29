import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../Assets/getgif.gif"
import './home.styles.scss'
import { Button } from "../../components/button/button.component";
import Features from "../../components/features/features.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Ourapp from "../../components/ourapp/ourApp.route";
import ContactUs from "../../components/contactUs/contactUs.component";
import Typewriter from "typewriter-effect";
const Home = () => {
    return (
        <div id="Home">
            <div className='home-page'>
                <div className="landing-page">
                    <div className="heading-cta">
                        <h1 className="landing-page-heading" >
                            <span className="automating">Automating</span><br /> the <Typewriter  onInit={
                                (typewriter) => {
                                    typewriter
                                        .typeString("Future.")
                                        .pauseFor(500)
                                        .deleteAll(200)
                                        .changeDelay(200)
                                        .typeString("Present.")
                                        .start()

                                }
                            } />
                        </h1>
                        <Button buttonSize="btn--large" ><a href="/form/heydo_coorp">Fill the form</a></Button>
                    </div>
                    <div>
                        <img className="landing-page-logo" src={Logo} alt="" />
                    </div>
                </div>
                <Ourapp />
                <Features />
                <Testimonials /> 
                <ContactUs text = "Book a demo"/>
            </div>

        </div>
    )
}
export default Home;
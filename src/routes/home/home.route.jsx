import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../Assets/logo.jpeg"
import './home.styles.scss'
import { Button } from "../../components/button/button.component";
import Features from "../../components/features/features.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Ourapp from "../../components/ourapp/ourApp.route";
import ContactUs from "../../components/contactUs/contactUs.component";
const Home = () => {
    return (
        <Fragment>
            <div className='home-page'>
                <img src={Logo} alt="" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, cum.
                </p>

                <Button buttonSize="btn--large" >Contact Us</Button>
                <Ourapp/>
                <Features />
                <Testimonials/>
                <ContactUs/>
            </div>

        </Fragment>
    )
}
export default Home;
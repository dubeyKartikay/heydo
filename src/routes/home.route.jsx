import {  Outlet } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../Assets/logo.jpeg"
import './home.styles.scss'
import { Button } from "../components/button/button.component";
const Home = () => {
    return (
        <Fragment>
            <div className='home-page'>
                <img src={Logo} alt="" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, cum.
                </p>
                
            <Button  buttonSize="btn--large" >Download!</Button>
            </div>
            
        </Fragment>
    )
}
export default Home;
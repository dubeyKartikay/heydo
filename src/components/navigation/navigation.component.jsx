import React, { Component,Fragment } from 'react'
import { MenuItems } from './menu-items'
import "./navigation.styles.scss"
import { Button } from '../button/button.component';
import { Outlet } from 'react-router';
import Logo from '../../Assets/transparent.svg'
export default class Navigation extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <Fragment>
                <div className='navbar-items'>
                    <img className='navbar-logo' src= {Logo} alt="" />
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} ></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active':"nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index} ><a className={item.cName} href={item.url} >
                                    {item.title}
                                </a></li>
                            )
                        })}
                    </ul>
                    <Button buttonStyle="btn--outline" >Sign Up</Button>
                </div>
                <Outlet/>
            </Fragment>
        )
    }
}

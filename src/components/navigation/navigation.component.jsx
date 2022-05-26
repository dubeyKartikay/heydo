import React, { Component,Fragment } from 'react'
import { MenuItems } from './menu-items'
import "./navigation.styles.scss"
import { Button } from '../button/button.component';
import { Outlet } from 'react-router';
export default class Navigation extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <Fragment>
                <nav className='navbar-items'>
                    <h1 className="navbar-logo">Heydo <i className='fab fa-react'></i></h1>
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
                </nav>
                <Outlet/>
            </Fragment>
        )
    }
}

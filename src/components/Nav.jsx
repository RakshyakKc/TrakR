import React from 'react'
import './css/Nav.css'
import { NavLink } from 'react-router-dom'
const Nav = (props) => {
    return (
        <div className='nav container'>
                <div className='left'>
                    <h2>
                        <NavLink
                        exact
                        to='/'
                        activeClassName='active'
                        className='inactive'>
                            TrakR
                        </NavLink>
                    </h2>
                    <form onSubmit={props.handleSearch}>
                        <input type="text" onChange={props.onChange} value={props.search} />
                        <input className='mobile' type="submit" value="search" />
                    </form>
                </div>

                <div className='right'>
                    <ul>
                        <li><NavLink
                        exact
                        to='/'
                        activeClassName='active'
                        className='inactive'>
                            Account
                        </NavLink></li>
                        <li><NavLink
                        exact
                        to='/'
                        activeClassName='active'
                        className='inactive'>
                            About
                        </NavLink></li>
                        <li><NavLink
                        exact
                        to='/Jobs'
                        activeClassName='active'
                        className='inactive'>
                            Jobs
                        </NavLink></li>
                        <li><NavLink
                        exact
                        to='/'
                        activeClassName='active'
                        className='inactive'>
                            {props.isLogged ? 'Sign out' : 'Sign in'}
                        </NavLink></li>
                    </ul>
                </div>

        </div>
    )
}
export default Nav
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=(props)=>{
    return(
        <header>
            <div className="header-left">
                <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                <NavLink exact to="/quiz" activeClassName='active'>Quiz</NavLink>
            </div>
            <div className="header-right">
                <NavLink exact to="/login" activeClassName='active'>Log-In</NavLink>
                <NavLink exact to="/statistics" activeClassName='active'>Statistics</NavLink>
            </div>
        </header>
    );
};

export default Header;
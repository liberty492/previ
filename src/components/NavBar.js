import React from 'react';
import { Link ,NavLink} from 'react-router-dom';

export default function Navbar() {
    
    var styles={
        backgroundColor:'#475562',
        borderBottom:'0.5px white solid',
        borderTop:'0.5px white solid'}
    return (<>
        <nav className="navbar navbar-expand-lg" style={ styles }>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/*<NavLink activeClassName="bg-info" className="nav-item nav-link text-white text-uppercase mx-2 active" to='/home'>Home</NavLink>
        <NavLink activeClassName="bg-success" className="nav-item nav-link  text-white text-uppercase mx-2 " to='/about'>About</NavLink>
        <NavLink activeClassName="bg-primary" className="nav-item nav-link text-white text-uppercase mx-2 " to='/service'>Services</NavLink>
        <NavLink activeClassName="bg-warning" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/contact'>Contact</NavLink>
        <NavLink activeClassName="bg-dark" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/props'>Props</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/onepage'>SinglePage</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/courses'>Courses</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/statefull'>Statefull</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/stateObject'>StateObject</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/axiosRestApi'>AxiosRestApi</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/signup'>Signup</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/container'>Create-Redux</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/hooks1'>Hooks</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/hooksapi/create'>HooksSignup</NavLink>
        <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/pagination'>Pagination</NavLink>
      */}
      <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/allegro'>allegro</NavLink>

    
    <NavLink activeClassName="bg-light" className="nav-item nav-link text-white text-uppercase mx-2 mr-2" to='/hooksapi'>HooksApi</NavLink>
        </div>
    </div>
  </nav>
    </>
    );
}

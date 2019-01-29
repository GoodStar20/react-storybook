import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard | </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create Expense | </NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help | </NavLink>
    <NavLink to="/persons" activeClassName="is-active"> Persons List | </NavLink>
    <NavLink to="/personPost" activeClassName="is-active"> Persons Post | </NavLink>
    <NavLink to="/personDel" activeClassName="is-active"> Persons Delete |</NavLink>
  </header>
);

export default Header;

import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './navbar.scss';

class Navbar extends Component {
  // This method takes the list of strings we get in props and converts them into links
  generateNavbarElements() {
    const { items } = this.props;

    // We're iterating through items (an array of strings) and generating the appropriate
    // JSX for each element
    const itemElements = items.map((item, idx) => {
      // Convert our page titles to valid URL paths so that we can redirect to them
      // e.g. 'Meet the team' --> /meet-the-team
      const redirectPath = '/' + item.toLowerCase().replace(/ /g, '-');

      // These NavLink tags basically say "when I am clicked, redirect the user to URL X"
      // X is specified by the "to" property you see a few lines below
      // So if we have a navlink with to='/hello' then when you click the link, the URL
      // will change to /hello
      // activeClassName just allows you to apply special styling to the URL that is currently
      // selected
      return (
        <NavLink
          to={redirectPath}
          className="navlink"
          activeClassName="active"
          key={`${item}-${idx}`}
        >
          {item}
        </NavLink>
      );
    });

    return itemElements;
  }

  render() {
    return <div className="navbar">{this.generateNavbarElements()}</div>;
  }
}

export default Navbar;

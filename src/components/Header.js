import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SocialLinks } from './SocialLinks';

// Adjusted HeaderWrapper for transparency and positioning
const HeaderWrapper = styled.header`
  background-color: transparent; // Set background to transparent
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 4rem;
  position: absolute; // Positioning the header absolutely
  top: 0; // Align to the top of the container
  width: 95%; // Ensure it spans the full width
  z-index: 1000; // High z-index to ensure it stays on top of other content
`;

const NavList = styled.ul`
  list-style: none;
  padding: 1; // Adjusted padding to 0
  display: flex;
  gap: 2rem;
  background-color: transparent;
`;

const StyledNavLink = styled(NavLink)`
  color: silver;
  text-decoration: none;
  vertical-align: top;
  background-color: transparent;
  &.active {
    color: white;
    text-decoration: shadow;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/" end>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services">Services</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/benefits">Benefits</StyledNavLink>
        </li>
      </NavList>
    </nav>
    <SocialLinks />
  </HeaderWrapper>
);

export default Header;

import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import nav from './Nav';

function Navbar() {

  const [navClass, setNavClass] = useState('navbar')
  const [menuToggle, setMenuToggle] = useState({
    listClass: 'menu',
    button: <MenuRoundedIcon style={{ color: '#fff' }} />,
    toggleStatus: false,
  });

  const toggleMenu = () => {

    if (menuToggle.toggleStatus == false) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu active',
          button: <CloseRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });
    } else if (menuToggle.toggleStatus == true) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu',
          button: <MenuRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setNavClass('navbar stickyNav');
    } else {
      setNavClass('navbar');
    }
  });

  return (
    <>
      <nav className={navClass}>
        <div className='max-width'>
          <div className='logo'><a href='#home'>Home<span>Sweet</span>Home</a></div>

          <ul className={menuToggle.listClass}>
            {nav.map((val, index) => {
              return (
                <li key = {index}>
                  <a onClick={toggleMenu} href={val.path}>{val.name}</a>
                </li>
              );
            })}
          </ul>

          <div className='menu-btn'>
            <IconButton onClick={toggleMenu} aria-label="MenuRoundedIcon">
              {menuToggle.button}
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
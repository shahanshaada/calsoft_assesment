import React, { useState } from 'react';

import { SidebarData } from './SidebarData';
import styles from './Sidebar.module.scss';
import { IconContext } from 'react-icons';
import SubDropdown from './SubDropdown';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

function Sidebar(props) {
  return (
    <>
      <IconContext.Provider value={{ color: '#686868' }}>
        <div className={styles.navbar}>
          {!props.sidebarState && <a src='#' className={styles.menuBars}>
           <img src="icons/menu_open.svg" height={36} width={36} onClick = {() => props.change()} />
          </a>}
        </div>
        <nav className={props.sidebarState ? styles.navMenuActive : styles.navMenu}>
          <ul className={styles.navMenuItems} >
            <li className={styles.navbarToggle}>
             {props.sidebarState && <a src='#' className={styles.menuBarsOpen}>
           <img src="wextrade_logo.png"/> <img src="icons/menu_open.svg" height={36} width={36} onClick = {() => props.change()} />
                
              </a>}
            </li>
            {SidebarData.map((item, index) => {
              return (
               item.dropdownItems.length>0 ?
      
             <SubDropdown props={item}/>
             :<li key={index} className={styles.navText}>
                  <a src={item.path}>
                    <img src={item.icon}/>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
            <div style={{marginTop:"50px"}}>
            <ToggleSwitch label1='Light' label2='Dark' icon1='icons/sun.svg' icon2='icons/dark.svg'/>       

            </div>

          </ul>
        </nav>

       </IconContext.Provider>
       
    </>
  );
}

export default Sidebar;
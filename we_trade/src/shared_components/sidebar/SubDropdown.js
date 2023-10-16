import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

function SubDropdown({props}){
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    return(
        <li  className={styles.navText} onClick={showSubnav}>
        <a src={props.path}>
          <img src={props.icon}/>
          <span>{props.title}<img className={subnav && styles.reverseArrow} style={{marginLeft:"6px"}} src="icons/down_Arrow.svg"/></span>
        </a>
        {subnav && <div>{props.dropdownItems.map(item=>{return(<li className={styles.subItem}>{item.item}</li>)})}</div>}
      </li>
    )
}
export default SubDropdown;
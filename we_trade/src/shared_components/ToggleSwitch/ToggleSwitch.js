import React, { Component } from "react";
import styles from './ToggleSwitch.module.scss';
function ToggleSwitch({ label1,label2,icon1,icon2 }) {

    return (
        <>
            <input
                className={styles.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className={styles.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span style={{width:"50%",textAlign:"center",color: '#636363',fontSize: '16px',fontWeight: '500',lineHeight: '24px'}}><img style={{marginRight:'8px'}} src={icon1}/>{label1}</span>   
                            <span className={styles.reactSwitchButton} ></span>
                <span style={{width:"50%",textAlign:"center",color: '#636363',fontSize: '16px',fontWeight: '500',lineHeight: '24px'}}><img style={{marginRight:'8px'}} src={icon2}/>{label2}</span>
            </label>
        </>
    );

}

export default ToggleSwitch;
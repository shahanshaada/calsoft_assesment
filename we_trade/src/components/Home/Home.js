import SpotLight from '../spotlight/Spotlight';
import Sidebar from '../../shared_components/sidebar/Sidebar';
import styles from "./Home.module.scss";
import { useState } from 'react';
function Home() {
    const [sidebarStatus, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    function handleState() {
        setSidebar(!sidebarStatus)
    }
    function handleDropdown(){
        setDropdown(!dropdown)
    }
    return (
        <div >
            <div className={styles.container}>
                <Sidebar sidebarState={sidebarStatus} change={handleState} />
                <div><img src="icons/notification.svg" style={{ marginRight: "16px" }} />
                    <button onClick={handleDropdown}><img src="user.png" style={{ marginRight: "8px" }} />User001 <img className={dropdown && styles.reverseArrow} src="icons/down_Arrow_blue.svg" /></button>
                    {dropdown && <div className={styles.dropDown}>
                        <ul>
                            <li>My Account</li>
                            <li>Logout</li>
                        </ul>
                    </div>}
                </div>
            </div>
            <div className={sidebarStatus && styles.moveBody}>
                <SpotLight />

            </div>
        </div>
    )
}
export default Home
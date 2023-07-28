import React from 'react';
import {Outlet} from "@mui/icons-material";
import styles from "./components/Site.module.css";
import {NavLink} from "react-router-dom";

function App() {
    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/page/0'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        1</NavLink></div>
                    <div><NavLink to={'/page/1'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        2</NavLink></div>
                    <div><NavLink to={'/page/2'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
export default App;

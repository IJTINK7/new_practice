import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {Page} from "./pages/Page";
import {dataState} from "./dataState/dataState";
import {Error404} from "./pages/Error404";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"/page/0"}>Page1</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"/page/1"}>Page2</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"/page/2"}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                   <Routes>
                        <Route path={"/"} element={<Navigate to={"/page/0"}/>}/>
                        <Route path={"/page/:stolenID"} element={<Page pages={dataState.pages}/>}/>
                       <Route path={"/*"} element={<Error404/>}/>
                   </Routes>

                </div>
            </div>
        </div>
    );
};


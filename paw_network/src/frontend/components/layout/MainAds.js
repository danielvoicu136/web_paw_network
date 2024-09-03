import React from 'react';
import classes from './MainAds.module.css';

function MainAds() { 
    return (
        <div className={classes['ads-container']}>
            <div className={classes['small-box-1']}><p><span className={classes.accentText}>Unlimited</span> services for your pets</p></div>
            <div className={classes['small-box-2']}><p><span className={classes.accentText}>-60%</span> | 3 months premium <span className={classes.accentText}>CODE: PET60</span></p></div>
            <div className={classes['big-box']}></div>
        </div>
    );
}

export default MainAds;

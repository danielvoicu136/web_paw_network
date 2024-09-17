import React from 'react';
import classes from './MainFooter.module.css';

function MainFooter() { 
    return (
        <footer className={classes.footer}>
            <div className={classes.footerColumn}>
                <p className={classes.footerText}>Some footer text here. You can include company info or a slogan.</p>
            </div>
            <div className={classes.footerColumn}>
                <ul className={classes.footerLinks}>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                    <li><a href="#">Link 5</a></li>
                </ul>
            </div>
            <div className={classes.footerColumn}>
            <a href="#" className={classes.socialLink}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={classes.socialLink}><i className="fab fa-twitter"></i></a>
                <a href="#" className={classes.socialLink}><i className="fab fa-instagram"></i></a>
                <p>Hello, friends of Animals !</p>
            </div>
        </footer>
    );
}

export default MainFooter;

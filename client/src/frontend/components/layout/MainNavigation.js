import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() { 

    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <div className={classes.navbarLeft}>
                    <a href="#" className={classes.logo}><span className={classes.logoIcon}><i className="fa-solid fa-paw"></i></span> PAW</a>
                    <a href="#" className={classes.dropbtn}><i class="fa-solid fa-comment-medical"></i> Chat</a>
                    <div className={classes.dropdown}>
                        <a href="#" className={classes.dropbtn}><i className="fas fa-home"></i> Routes</a>
                        <div className={classes.dropdownContent}>
                            <Link to='/'>Index</Link>
                            <Link to='/home'>Home</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/services'>Live Chat</Link>
                        </div>
                    </div>

                    <div className={classes.dropdown}>
                        <a href="#" className={classes.dropbtn}><i class="fa-solid fa-gift"></i> Gifts</a>
                        <div className={classes.dropdownContent}>
                            <a href="#">Buy Gift</a>
                            <a href="#">Activate Gift ?</a>
                        </div>
                    </div>
                </div>
                <div className={classes.navbarRight}>
                    <a href="#" className={classes.searchIcon}><i class="fa-solid fa-magnifying-glass"></i></a>
                    <a href="#"><i class="fa-solid fa-user"></i> My Account</a>
                    <a href="#" className={classes.ctaButton}><i class="fa-solid fa-right-to-bracket"></i> Register</a>
                </div>
            </nav>
        </header>
    );
}

export default MainNavigation;

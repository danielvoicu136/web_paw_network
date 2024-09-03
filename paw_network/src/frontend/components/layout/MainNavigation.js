import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() { 

    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <div className={classes.navbarLeft}>
                    <a href="#" className={classes.logo}><i className="fa-solid fa-paw"></i> PAW</a>

                    <div className={classes.dropdown}>
                        <a href="#" className={classes.dropbtn}><i className="fas fa-home"></i> Explore Routing</a>
                        <div className={classes.dropdownContent}>
                            <Link to='/'>Index</Link>
                            <Link to='/home'>Home</Link>
                            <Link to='/services'>Services</Link>
                        </div>
                    </div>

                    <div className={classes.dropdown}>
                        <a href="#" className={classes.dropbtn}><i class="fa-solid fa-gift"></i> Paw Gift</a>
                        <div className={classes.dropdownContent}>
                            <a href="#">Buy Gift</a>
                            <a href="#">Activate Gift ?</a>
                        </div>
                    </div>
                </div>
                <div className={classes.navbarRight}>
                    <a href="#"><i class="fa-solid fa-user"></i> My Account</a>
                    <a href="#" className={classes.ctaButton}><i class="fa-solid fa-right-to-bracket"></i> Enter in our Paw World</a>
                </div>
            </nav>
        </header>
    );
}

export default MainNavigation;

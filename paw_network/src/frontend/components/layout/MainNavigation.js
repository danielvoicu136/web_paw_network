import { Link } from "react-router-dom";

function MainNavigation() { 

    return (
      
        <header>
        <div className="main-logo">Logo</div>
        <nav>
                <ul>  
                    <li><Link to='/'>Index</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                </ul>    
        </nav>
        </header>

    );

}

export default MainNavigation;
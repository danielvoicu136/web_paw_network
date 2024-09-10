

import React from 'react';
import classes from './HeroContent.module.css';


function HeroContent() { 
    return(  
        <div className={classes['ads-container']}>
            <div className={classes['small-box-1']}><p>
            All your favorite pet services. Anytime, anywhere.
            Unlimited access to medical services, quality food, dedicated products for you and your pet needs.
            Enter in our Paw World </p>
            </div>
            <div className={classes['small-box-2']}><p>
                Over 70.000 products and services. 
                Available on IOS and Android. 
                Rated 4.8 / 5 Stars   
            </p>
            </div>
            <div className={classes['big-box']}>
            <p>
                Over 70.000 products and services. 
                Available on IOS and Android. 
                Rated 4.8 / 5 Stars   
                <img src='../../../../assets/images/product.jpg' alt='img not found'></img>
            </p>
         
            </div>
        </div>
    );
}

export default HeroContent;

import React from 'react';
import classes from './HeroContent.module.css';
import productImage from '../../assets/images/product.jpg';  // Importing the image

function HeroContent() { 
    return(  
        <div className={classes['ads-container']}>
            <div className={classes['small-box-1']}>
                <p>
                    All your favorite pet services. Anytime, anywhere.
                    Unlimited access to medical services, quality food, dedicated products for you and your pet needs.
                    Enter in our Paw World
                </p>
            </div>
            <div className={classes['small-box-2']}>
                <p>
                    Over 70.000 products and services. 
                    Available on IOS and Android. 
                    Rated 4.8 / 5 Stars   
                </p>
            </div>
            <div className={classes['big-box']}>
                <p className={classes['central-content']}>
                    <img src={productImage} width="350px" height="350px" alt="product" />
                </p>
            </div>
        </div>
    );
}

export default HeroContent;

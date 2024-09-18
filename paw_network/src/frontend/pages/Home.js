import HeroContent from "../components/layout/HeroContent.js";
import HeroSlider from "../components/layout/HeroSlider.js";
import MainAds from "../components/layout/MainAds.js";
import MainFooter from "../components/layout/MainFooter.js";
import MainNavigation from "../components/layout/MainNavigation.js";

function HomePage () { 

    return <div>
                <MainAds/>
                <MainNavigation/>
                <HeroContent/>
               {/*  <HeroSlider/> */}
                <MainFooter />
        </div>
}

export default HomePage;


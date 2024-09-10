import HeroContent from "../components/layout/HeroContent";
import HeroSlider from "../components/layout/HeroSlider";
import MainAds from "../components/layout/MainAds";
import MainNavigation from "../components/layout/MainNavigation";

function HomePage () { 

    return <div>
                <MainAds/>
                <MainNavigation/>
                <HeroContent/>
                <HeroSlider/>
                
        </div>

}

export default HomePage;


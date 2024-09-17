import HeroContent from "../components/layout/HeroContent";
import HeroSlider from "../components/layout/HeroSlider";
import MainAds from "../components/layout/MainAds";
import MainFooter from "../components/layout/MainFooter";
import MainNavigation from "../components/layout/MainNavigation";

function HomePage () { 

    return <div>
                <MainAds/>
                <MainNavigation/>
                <HeroContent/>
                <HeroSlider/>
                <MainFooter />
        </div>

}

export default HomePage;


import Header from "../Components/Header/index";
import FreeMembership from "../Components/FreeMembership/index";
/* import LatestVideos from "../Components/LatestVideos"; */
import Testimonial from "../Components/Testimonial/index";
/* import PopularTutorial from "../Components/PopularTutorial"; */

const Home = () =>{
    return(
        <>
        <Header />
        <Testimonial />
        {/* <PopularTutorial /> */}
        <FreeMembership />
        {/* <LatestVideos /> */}
    </>
    );
}

export default Home;
import HomeHeader from "../../partials/home/HomeHeader";
import Members from "../../partials/home/Members";
import Mission from "../../partials/home/Mission";


const Home = () => {
    return (
        <div>
           <HomeHeader/>
           <Mission/>

           <Members/>
        </div>
    );
};

export default Home;
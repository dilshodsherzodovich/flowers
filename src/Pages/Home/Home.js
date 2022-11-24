import Delivery from "../../Components/Delivery/Delivery";
import Map from "../../Components/Map/Map";
import Review from "../../Components/Review/Review";
import Services from "../../Components/Services/Services";
import WhyRose from "../../Components/WhyRose/WhyRose";


const Home = () => {
    return (
        <main>
            <Services />
            <Review />
            <Delivery />
            <WhyRose />
            <Map />
        </main>
    )
}

export default Home;
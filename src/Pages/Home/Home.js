import Delivery from "../../Components/Delivery/Delivery";
import Intro from "../../Components/Intro/Intro";
import Map from "../../Components/Map/Map";
import News from "../../Components/News/News";
import Products from "../../Components/Products/Products";
import Review from "../../Components/Review/Review";
import Services from "../../Components/Services/Services";
import WhyRose from "../../Components/WhyRose/WhyRose";

const Home = () => {
  return (
    <main>
      <Intro />
      <Services />
      <Products />
      <Review />
      <News />
      <Delivery />
      <WhyRose />
      <Map />
    </main>
  );
};

export default Home;

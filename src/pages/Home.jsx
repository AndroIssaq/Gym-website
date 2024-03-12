import AboutCeo from "../components/AboutCeo";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCards";
import OurClasses from "../components/OurClasses";
import Plans from "../components/Plans";
import Services from "../components/Services";
import Video from "../components/Video";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCeo />
      <Video />
      <Services />
      <div className="my-[50px]">
        <InfiniteMovingCardsDemo />
      </div>
      <Features />
      <OurClasses />
      <Plans />

    </div>
  );
};

export default Home;

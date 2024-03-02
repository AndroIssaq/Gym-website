import Features from "../components/Features";
import Hero from "../components/Hero";
import OurClasses from "../components/OurClasses";
import Plans from "../components/Plans";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCeo/>
      <Services />
      <div className="my-[50px]">
      <InfiniteMovingCardsDemo/>
      </div>
      <Features />
      <OurClasses />
      <Plans />
      <Video />
    </div>
  );
};

export default Home;

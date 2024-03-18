import AboutCeo from "../components/AboutCeo";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCards";
import OurClasses from "../components/OurClasses";
import Plans from "../components/Plans";
import Services from "../components/Services";
import SwiperImages from "../components/SwiperImages";
import Video from "../components/Video";
import video1 from '../assets/FDownloader.net-464602575365516-(1080p).mp4'
import video2 from '../assets/2ce61d0f-b44e-4fb7-b59f-833498df7027.mp4'
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCeo />
      <Video video={video1}/>
      <Video video={video2}/>
      <Services />
      <div className="my-[50px]">
        <SwiperImages/>
      </div>
      <Features />
      <OurClasses />

      <Plans />

    </div>
  );
};

export default Home;

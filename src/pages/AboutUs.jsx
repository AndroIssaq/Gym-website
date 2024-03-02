import img from '../assets/pexels-the-lazy-artist-gallery-2247179.jpg'
import FlexComponent from '../components/FlexComponent'
import CoreValue from '../components/CoreValue'
import OurTeam from '../components/OurTeam'
import {  InfiniteMovingCardsDemo } from '../components/InfiniteMovingCards'
const AboutUs = () => {
  return (
      <>
      <main className='flex flex-col items-center justify-center gap-[50px]'>
        <FlexComponent flexRow={true} img={img} title={'Where Fitness Meets Excellence'} des={ 'At EliteGYM, we believe that every individual has the potential to achieve their fitness and wellness goalsOur journey began with a passion for health and a commitment to providing a place where people could thrivephysically and mentally. Since our inception, we have dedicated ourselves to empowering our members and fostering a vibrant fitness community.'}/>
        <FlexComponent flexRow={false} img={img} title={'Our Roots and Evolution'} des={ 'EliteGYM was founded in [Year] by [Founder Names]. It all started with a vision to create a fitness haven that went beyond the conventional gym experience. Inspired by our personal fitness journeys and a desire to make a positive impact, we set out to build a place where people could transform their lives.From our humble beginnings to our current state-of-the-art facility, our journey has been marked by growth, resilience, and unwavering commitment to our members.'}/>
        <CoreValue/>
        <InfiniteMovingCardsDemo/>
        <OurTeam/>
      </main>
       
      </>
    )
  }

export default AboutUs
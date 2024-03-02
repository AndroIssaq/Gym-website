import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import img1 from '../assets/img.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    img:img1,
  },
  {
    img:img2,
  },
  {
    img: img3,
  },
  {
    img:img4,
  },
  {
    img:img5,
  },
  {
    img:img6,
  },
];

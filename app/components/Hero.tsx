import Image from "next/image";
import React from "react";
import BlogHero from "@/public/blogHero.jpg";

const Hero = () => {
  return (
    <div className="min-h-[80vh] lg:flex lg:justify-around lg:items-center p-8">
      <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col">
        <div className=" font-heading-playfair  font-extrabold text-[45px] lg:text-8xl mb-8">
          The Mock Blog
        </div>
        <div className=" font-subtext-heebo font-light mb-10 lg:mb-0 hero-subtext">
          It's always an empty page, until it is not.
          <p className=" hero-subtext">
            So dive in, explore, and if you're ready, leave your mark. And who
            knows? Your next big idea might just start right here.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center  lg:w-[50%]">
        <Image
          src={BlogHero}
          alt="Notebook"
          width={300}
          height={300}
          className=" rounded-2xl border-8 border-[#dbb0a15b]"
        />
      </div>
    </div>
  );
};

export default Hero;

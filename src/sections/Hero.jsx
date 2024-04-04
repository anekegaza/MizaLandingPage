import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { ScrollReveal } from "reveal-on-scroll-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  useGSAP(() => {
    // gsap.from(".hero-text", {
    //   y: -200,
    //   // skewX: 65,
    //   opacity: 0,
    //   // skewX: -65,
    //   duration: 1,
    //   delay: 1,

    //   stagger: {
    //     amount: 0.4,
    //   },
    // });

    gsap.fromTo(
      ".bigshoe",
      {
        opacity: 0,
        scale: 0,
        rotation: 400,
      },
      {
        duration: 1,
        delay: 2,
        opacity: 1,
        scale: 1,
        rotation: 0,
      }
    );
  });

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <ScrollReveal.div className="hero-text relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10">
            {" "}
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Miza</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Miza arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal.div>

      <ScrollReveal.div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe Image"
          width={610}
          height={500}
          className="object-contain relative  z-10 bigshoe"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </ScrollReveal.div>
    </section>
  );
};

export default Hero;

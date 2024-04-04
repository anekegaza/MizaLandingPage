import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

const SuperQuality = () => {
  useGSAP(() => {
    gsap.to(".super-shoe", {
      y: -50,
      repeat: -1,
      duration: 2,
      yoyo: true,
    });
  }, []);
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <ScrollReveal.div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin text-4xl capitalize lg-max:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the best comfort and elegance. Our carefully designed
          fotwears are crafted to augument your experience, providing you with
          unparalled quality and a touch of class.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence guarantees your satisfaction.
        </p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </ScrollReveal.div>

      <ScrollReveal.div className=" super-shoe flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </ScrollReveal.div>
    </section>
  );
};

export default SuperQuality;

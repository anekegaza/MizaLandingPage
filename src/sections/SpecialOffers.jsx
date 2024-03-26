import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin text-4xl capitalize lg-max:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the best comfort and elegance. Our carefully designed
          fotwears are crafted to augument your experience, providing you with
          unparalled quality and a touch of class.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence guarantees your satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop Now!" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

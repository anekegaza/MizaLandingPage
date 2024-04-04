import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { ScrollReveal } from "reveal-on-scroll-react";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <ScrollReveal.h3 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red">Customers</span> are saying
      </ScrollReveal.h3>
      <ScrollReveal.p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine Stories from our satisfied customers about their
        exceptional experience with us.
      </ScrollReveal.p>
      <ScrollReveal.div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </ScrollReveal.div>
    </section>
  );
};

export default CustomerReviews;

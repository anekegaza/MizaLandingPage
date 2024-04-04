import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { ScrollReveal } from "reveal-on-scroll-react";

const Services = () => {
  return (
    <section className="max-container ">
      <ScrollReveal.div className="flex justify-center flex-wrap gap-9 sm:flex-none">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </ScrollReveal.div>
    </section>
  );
};

export default Services;

import { ScrollReveal } from "reveal-on-scroll-react";
import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <ScrollReveal.div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <h3 className="text-white font-bold font-mono text-4xl italic">
              Miza
            </h3>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get Shoes ready for the new term at your nearest Miza store. FInd
            Your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-1 lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {" "}
                {section.title}{" "}
              </h4>
              <ul>
                {" "}
                {section.links.map((link) => (
                  <li
                    className="text-slate-gray font-montserrat text-base leading-normal hover:text-white-400 cursor-pointer"
                    key={link.name}
                  >
                    <a href="/"> {link.name} </a>
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal.div>
      <ScrollReveal.div className="flex justify-between text-white-400 mt-24    max-sm:flex-col  max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} />
          <p>Copyright. All rights reserved.</p>
        </div>

        <div
          className="
          font-montserrat
          cursor-pointer max-sm:mt-3"
        >
          <p className="hover:text-white">Made with Love by Aneke Ifeanyi</p>
        </div>
      </ScrollReveal.div>
    </footer>
  );
};

export default Footer;

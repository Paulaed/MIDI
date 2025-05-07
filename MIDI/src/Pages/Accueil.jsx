import React from "react";
import Valeurs from "./Valeurs";
import CarouselSection from "./carouselSection";
import Testimonials from "./Testimonials";
import midi5 from "../assets/imag.jpg";
;
const Accueil = () => {
  return (
    <div>
      <div className=" flex w-full pt-20 text-white bg-[#001202] ">
        <div className=" py-10  justify-center items-center m-10 px-5 gap-20 text-center">
          <p className="text-4xl font-bold  text-black-600 mb-7 space-x-2  px-15 ">
            Vous ne savez pas quoi manger ce midi ?
            <br /> On s'en occupe!
          </p>
          <p className="my-10 text-xl font-semibold  text-center">
            {" "}
            Avec{" "}
            <span className="text-orange-500 mt-7 font-bold text-2xl ">
              Il est midi
            </span>{" "}
            , chaque pause déjeuner devient un moment de bonheur !
          </p>

          <a
            href="/menu"
            className="my-5 inline-block text-white  bg-orange-600 px-10 py-2 rounded-full shadow hover:bg-[#B91C1C] transition"
          >
            Voir le menu du jour 🍛
          </a>
          
        </div>
        <div className="w-2xl">
          {" "}
          <img src={midi5} alt="" className="   rounded-full object-cover " />
        </div>
      </div>
      <Valeurs />
      <CarouselSection />
      <Testimonials />
    </div>
  );
};

export default Accueil;

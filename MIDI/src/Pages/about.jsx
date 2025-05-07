import React from "react";
import propos from "../assets/imagmidi.jpg";
import homme from "../assets/homme.png";
import maman from "../assets/maman.png";

const About = () => {
  return (
    <div className="bg-[#001202] text-white px-4 py-20 ">
      <h1 className="text-3xl font-bold text-center  mb-6">À propos</h1>

      {/* Qui sommes-nous ? */}
      <section className="mb-12">
        <h2 className="text-orange-500 text-2xl font-bold text-center mb-4">
          Qui sommes-nous ?
        </h2>
        <p className="text-xl font-semibold text-center max-w-4xl mx-auto mb-6">
          « Il est midi », c’est bien plus qu’un simple service de livraison.
          C’est une réponse concrète à une question que beaucoup se posent
          chaque jour : "Qu’est-ce que je vais manger ce midi ?" Ce projet est
          né d’une envie : offrir des repas béninois savoureux, équilibrés et
          accessibles, directement sur le lieu de travail.
        </p>
        <img
          src={maman}
          alt="Présentation"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover h-60"
        />
      </section>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-orange-500 text-2xl font-bold text-center mb-4">
          Notre mission
        </h2>
        <p className="text-xl font-semibold text-center max-w-4xl mx-auto mb-6">
          Redonner à la pause-déjeuner toute sa valeur : un moment de plaisir,
          de bien-être et de découverte. Nous voulons soulager les
          professionnels, étudiants et travailleurs occupés, en leur livrant un
          repas local de qualité, à un prix juste, sans perte de temps.
        </p>
        <img
          src={propos}
          alt="Mission"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover h-60"
        />
      </section>

      {/* Vision */}
      <section className="mb-12">
        <h2 className="text-orange-500 text-2xl font-bold text-center mb-4">
          Notre vision
        </h2>
        <p className="text-xl font-semibold text-center max-w-4xl mx-auto mb-6">
          Nous aspirons à être la référence de la pause-déjeuner béninoise, en
          offrant une solution simple, fiable et délicieuse. Notre ambition est
          de soulager vos journées avec des repas qui allient plaisir,
          authenticité et praticité.
        </p>
        <img
          src={homme}
          alt="Vision"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover h-60"
        />
      </section>

      <p className="text-2xl font-bold text-center max-w-3xl mx-auto mb-8">
        "Il est midi" n’est pas qu’un service, c’est une solution pensée pour
        vous, avec cœur et exigence.
      </p>

      {/* Bouton */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Commander maintenant
        </a>
      </div>
    </div>
  );
};

export default About;

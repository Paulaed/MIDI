import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="px-5 py-10 bg-base-300 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Ce que nos clients disent</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl p-6 border-2 border-dotted border-amber-100">
          <p>“Délicieux repas, livraison rapide !”</p>
          <div className="text-right font-bold mt-4">- Marie</div>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 border-2 border-dotted border-amber-100">
          <p>“Un service client au top, je recommande à 100%.”</p>
          <div className="text-right font-bold mt-4">- Jean</div>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 border-2 border-dotted border-amber-100">
          <p>“Enfin une vraie pause déjeuner de qualité !”</p>
          <div className="text-right font-bold mt-4">- Sophie</div>
        </div>
      </div>

      {/* Bouton centré sous les avis */}
      <div className="mt-8 flex justify-center">
        <a
          href="/menu"
          className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-[#B91C1C] transition"
        >
          Voir plus
        </a>
      </div>
    </section>
  );
};

export default Testimonials;

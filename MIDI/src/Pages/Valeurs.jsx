import React from "react";
import { Soup, Car, ShieldCheck, BookOpenCheck } from "lucide-react";

const Valeurs = () => {
  return (
    <div className="text-white px-4 py-12 bg-[#001202]">
      <h2 className="text-3xl font-bold text-center underline mb-10">
        Nos valeurs
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {/* Carte 1 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] bg-amber-50 text-black text-center p-6 rounded-2xl border-4 border-dotted transition-transform hover:scale-105">
          <Car
            size={48}
            color="#e87517"
            strokeWidth={1.5}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-bold text-orange-500 mb-2">Rapidité</h3>
          <p>
            Parce que votre temps est précieux, <br /> nous livrons entre 12h et
            15h sans retard.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] bg-amber-50 text-black text-center p-6 rounded-2xl border-4 border-dotted transition-transform hover:scale-105">
          <ShieldCheck
            size={48}
            color="#e87517"
            strokeWidth={1.5}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-bold text-orange-500 mb-2">Qualité</h3>
          <p>
            Des plats faits maison avec des produits locaux sains et frais.{" "}
            <br />
            Votre bien-être compte.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] bg-amber-50 text-black text-center p-6 rounded-2xl border-4 border-dotted transition-transform hover:scale-105">
          <Soup
            size={48}
            color="#e87517"
            strokeWidth={1.5}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            Accessibilité
          </h3>
          <p>
            Des plats à partir de 1500 FCFA, <br />
            pensés pour tous les portefeuilles.
          </p>
        </div>

        {/* Carte 4 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] bg-amber-50 text-black text-center p-6 rounded-2xl border-4 border-dotted transition-transform hover:scale-105">
          <BookOpenCheck
            size={48}
            color="#e87517"
            strokeWidth={1.5}
            className="mx-auto mb-2"
          />
          <h3 className="text-xl font-bold text-orange-500 mb-2">Plaisir</h3>
          <p>
            Manger doit être un moment de joie. <br />
            Chaque bouchée est là pour vous le rappeler.
          </p>
        </div>
        <a
          href="/about"
          className="block mx-auto mt-10 w-fit text-xl font-semibold bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition text-center"
        >
          Nous découvrir 
        </a>
      </div>
    </div>
  );
};

export default Valeurs;

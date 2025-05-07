import React from "react";
import { Link } from "react-router-dom";
import riz from "../assets/riz.jpg";
import pilé from "../assets/pilé.jpeg";
import Amiwo from "../assets/amiwo.jpg";
import Atassi from "../assets/ATASSI1.jpg";
import Cassoulet from "../assets/Cassoulet.jpg";
import Frite from "../assets/poulet.jpeg";
import telibo from "../assets/telibo1.jpeg";
import Wassa from "../assets/wassa.jpg";
import Atcheke from "../assets/atcheke.jpeg";
import pyron from "../assets/ba.jpeg";
import Spaghetti from "../assets/spaghetti2.jpg";
import Khom from "../assets/khom.jpg"; // ou le nom correct du fichier
import Akassa from "../assets/akassa.jpg";

// Liste complète des plats
const plats = [
  {
    nom: "Riz au gras",
    description: "Riz avec friture et piment doux ou jus de tomate.",
    prix: "1500 CFA",
    image: riz,
  },
  {
    nom: "Atassi",
    description: "Riz au haricot avec friture et piment doux.",
    prix: "1500 CFA",
    image: Atassi,
  },
  {
    nom: "Wassa-Wassa",
    description: "Semoule de manioc cuite à la vapeur, spécialité béninoise.",
    prix: "1500 CFA",
    image: Wassa,
  },
  {
    nom: "Igname pilé",
    description: "Iganme écrasé servi avec sauce arachide ou tomate.",
    prix: "2000 CFA",
    image: pilé,
  },
  {
    nom: "Tèlibo",
    description:
      "Pâte à base de farine de mil, souvent servie avec sauce feuille.",
    prix: "1500 CFA",
    image: telibo,
  },
  {
    nom: "Amiwo (Pâte rouge)",
    description: "Pâte à base de maïs avec sauce tomate épicée.",
    prix: "1500 CFA",
    image: Amiwo,
  },
  {
    nom: "Kom (Pâte de maïs fermenté)",
    description:
      "Plat togolais traditionnel, souvent accompagné de sauce épicée.",
    prix: "1500 CFA",
    image: Khom,
  },
  {
    nom: "Akassa",
    description:
      "Pâte fermentée à base de maïs, souvent servie avec sauce gombo.",
    prix: "1500 CFA",
    image: Akassa,
  },
  {
    nom: "Pyron (Pâte gari)",
    description: "Pâte de gari accompagnée de jus de tomate et piment.",
    prix: "1500 CFA",
    image: pyron,
  },
  {
    nom: "Atcheke",
    description: "Semoule de manioc cuite à la vapeur, spécialité béninoise.",
    prix: "1500 CFA",
    image: Atcheke,
  },
  {
    nom: "Frites au poulet",
    description: "Pommes frites croustillantes avec morceaux de poulet frit.",
    prix: "2000 CFA",
    image: Frite,
  },
  {
    nom: "Cassoulet",
    description: "Riz au haricot avec friture et piment doux.",
    prix: "2000 CFA",
    image: Cassoulet,
  },
  {
    nom: "Spaghetti",
    description: "Spaghetti sautés à la sauce tomate avec œuf ou viande.",
    prix: "1500 CFA",
    image: Spaghetti,
  },
];

// Sélection du repas du jour (exemple : Tèlibo)
const repasDuJour = plats.find((plat) => plat.nom === "Atcheke");

// Supprimer le repas du jour de la liste pour ne pas le répéter
const platsSansRepasDuJour = plats.filter(
  (plat) => plat.nom !== repasDuJour.nom
);

const Menu = () => {
  return (
    <div className="bg-[#001202]  py-20 px-4 text-amber-200 min-h-screen">
      {/*Repas du jour */}
      <h1 className="text-2xl font-bold text-center  mb-8">Repas du jour</h1>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-2xl mx-auto mb-12 text-black">
        <img
          src={repasDuJour.image}
          alt={repasDuJour.nom}
          width={400}
          className=" h-64 object-cover  items-center rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{repasDuJour.nom}</h2>
        <p className="mb-2">{repasDuJour.description}</p>
        <p className="text-xl font-bold text-orange-500">{repasDuJour.prix}</p>
        <Link
          to="/commander"
          className="mt-4 inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
        >
          Commander 🍽️
        </Link>
      </div>

      {/* Section Autres plats */}
      <h1 className="text-3xl font-bold text-center mb-8">Menu du Jour</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-8 px-6">
        {platsSansRepasDuJour.map((plat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={plat.image}
              alt={plat.nom}
              width={400}
              className="h-70 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{plat.nom}</h2>
            <p className="text-sm text-gray-700 mb-2">{plat.description}</p>
            <p className="font-bold text-orange-600 mb-4">Prix : {plat.prix}</p>
            <Link
              to="/commander"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Commander 🍽️
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/about"
        className="block mx-auto mt-10 w-fit text-2xl font-bold bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-red-600 transition text-center"
      >
        Nous découvrir plus
      </Link>
    </div>
  );
};

export default Menu;

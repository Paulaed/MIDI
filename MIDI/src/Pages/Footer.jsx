import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-black py-2 px-5">
    <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
      {/* Nom du site et slogan */}
      <div className="text-left items-center">
        <h1 className="text-3xl font-bold">Il est midi</h1>
        <p className="text-lg font-semibold italic">
          "La pause déjeuner qui vous fait sourire !"
        </p>
      </div>
  
      {/* Réseaux sociaux */}
      <div className="flex gap-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
        </a>
      </div>
  
      {/* Champ d'avis ou plainte */}
      <div className="flex flex-col items-center ">
        <p className="text-lg font-bold">Laissez-nous un avis ou une plainte :</p>
        <input
          type="text"
          placeholder="Écrivez votre avis ici..."
          className="w-full max-w-md p-3 mt-3 border border-gray-400 rounded-lg"
        />
        <button className="mt-3 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-600 transition">
          Envoyer
        </button>
      </div>
    </div>
  
    {/* Copyright */}
    <p className="mt-4 text-center text-sm text-gray-600">
      © 2025 Il est midi. Tous droits réservés.
    </p>
  </footer>
  
  );
};

export default Footer;

import React, { useState } from "react";
import POP from "../assets/POP.jpeg";

const Commander = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dish: "",
    quantity: 1,
    time: "",
    address: "",
    notes: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Commande envoyée avec succès !");
    // Pour WhatsApp plus tard :
    // const message = `Nouvelle commande:\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nPlat: ${formData.dish}\nQuantité: ${formData.quantity}\nHeure: ${formData.time}\nAdresse: ${formData.address}\nNotes: ${formData.notes}`;
    // window.open(`https://wa.me/229xxxxxxxxxx?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-[#001202]  text-black py-10 px-4 pt-40">
      <h2 className="text-3xl font-bold text-center text-amber-200 mb-10">
        📦 Passer une commande
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Image illustrative */}
        <img
          src={POP}
          alt="Commande Il est midi"
          className="w-full lg:w-1/2 h-auto rounded-lg shadow-md object-cover"
        />

        {/* Formulaire */}
        <div className="w-full lg:w-1/2 bg-amber-50 p-6 shadow-lg rounded-xl ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="👤 Nom et prénom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950
              transition-transform hover:scale-105"
            />

            <input
              type="tel"
              name="phone"
              placeholder="📱 Téléphone / WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950 transition-transform hover:scale-105   "
            />

            <input
              type="text"
              name="dish"
              placeholder="🍛 Plat souhaité (ex: riz au gras)"
              value={formData.dish}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950 transition-transform hover:scale-105"
            />

            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950 transition-transform hover:scale-105"
            />

            {/* <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950transition-transform hover:scale-105 "
            /> */}

            <input
              type="text"
              name="address"
              placeholder="📍 Adresse de livraison"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950 transition-transform hover:scale-105 "
            />

            <textarea
              name="notes"
              placeholder="✍️ Remarques (optionnel)"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-950 transition-transform hover:scale-105"
            />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border rounded"
            >
              <option value="">💳 Choisissez un moyen de paiement</option>
              <option value="MoMoPay">MoMoPay</option>
              <option value="Flooz">Flooz</option>
              <option value="Celtiis"> Celtiis</option>
              <option value="Orange Money">Orange Money</option>
              <option value="Cash">💵 Espèces à la livraison</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-[#B91C1C] transition"
            >
              Valider ma commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Commander;

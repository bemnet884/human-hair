import React from 'react';
import { useParams } from 'react-router-dom';
import { specialOffer } from '../constants'; // Assuming you have a data file for special offers

const SpecialOfferDetail = () => {
  const { id } = useParams();
  const offer = specialOffer.find((offer) => offer.id === parseInt(id));

  if (!offer) {
    return <div>Offer not found</div>;
  }

  return (
    <section className="max-container padding-x py-6">
      <div className="flex justify-between items-center max-lg:flex-col gap-10">
        <div className="flex-1">
          <img
            src={offer.imgURL}
            alt={offer.name}
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-1 flex-col max-w-lg mx-auto">
          <h1 className="text-4xl font-bold text-primary">{offer.name}</h1>
          <p className="mt-4 text-lg text-slate-gray">{offer.description}</p>
          <p className="mt-4 text-2xl font-semibold text-primary">
            ${offer.price}
          </p>
          <button
            onClick={() => alert('Proceed to checkout or add more functionality')}
            className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-violet-400 transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferDetail;

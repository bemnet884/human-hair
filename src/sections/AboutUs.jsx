import React from 'react';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap gap-8 justify-center">

          <div className="bg-white shadow-md rounded-lg p-6 border-t-8 border-primary w-full md:w-1/3">
            <h2 className="text-4xl font-bold font-palanquin mb-4 text-center">
              About <span className="text-primary">Fandisha's Bundles</span>
            </h2>
            <p className="text-lg text-gray-700">
              At Fandisha's Bundles, we are passionate about providing premium hair products that elevate your style and confidence. Our journey is driven by a commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border-t-8 border-primary w-full md:w-1/3">
            <h3 className="text-3xl font-bold font-palanquin mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-gray-700">
              We aim to deliver luxurious, high-quality hair solutions that inspire and enhance your beauty. Our products are crafted with care and designed to meet your unique needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border-t-8 border-primary w-full md:w-1/3 text-center">
            <h3 className="text-3xl font-bold font-palanquin mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-8">
              Have questions or want to know more about us? Feel free to reach out. Our team is here to assist you.
            </p>
            <Link
              to="/Contact-Us"
              className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-violet-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

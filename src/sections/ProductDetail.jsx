import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../constants'; // Import your product data

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by ID from your product data
    const foundProduct = allProducts.find(p => p.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-container padding-x py-10">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.imgURL}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-md"
        />
        <div className="mt-6 md:mt-0 md:ml-8 flex flex-col">
          <h1 className="text-4xl text-primary font-semibold">{product.name}</h1>
          <p className="text-xl mt-4">{product.description}</p>
          <p className="text-2xl font-bold mt-4 text-primary">{product.price}</p>
          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-violet-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

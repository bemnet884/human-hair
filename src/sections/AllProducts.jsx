import { allProducts } from '../constants';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-palanquin">
            Our <span className="text-primary">Popular</span> Products
          </h2>
          <p className="mt-4 text-lg text-slate-gray font-montserrat max-w-2xl mx-auto">
            Experience luxurious quality and style with our premium hair selections. Discover a world of comfort, elegance, and unmatched value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((AllProduct) => (
            <ProductCard key={AllProduct.id} {...AllProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;

import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: '/image/product-1.png',
    name: 'Fresh Orange',
    price: '$12.99 -- $15.99',
  },
  {
    id: 2,
    image: '/image/product-2.png',
    name: 'Fresh Apple',
    price: '$10.99 -- $13.99',
  },
  {
    id: 3,
    image: '/image/product-3.png',
    name: 'Fresh Banana',
    price: '$9.99 -- $11.99',
  },
  {
    id: 4,
    image: '/image/product-4.png',
    name: 'Fresh Grapes',
    price: '$14.99 -- $17.99',
  },
  {
    id: 5,
    image: '/image/product-5.png',
    name: 'Fresh Mango',
    price: '$16.99 -- $19.99',
  }
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">Our <span>Products</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="box p-4 shadow-lg rounded-lg">
            <img src={product.image} alt={product.name} className="product-image" />
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <div className="price text-xl font-bold">{product.price}</div>
            <Link to="#" className="btn mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

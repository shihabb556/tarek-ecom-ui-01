import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const categories = [
  { id: 1, name: 'Fruits', image: 'image/cat-1.png' },
  { id: 2, name: 'Vegetables', image: 'image/cat-2.png' },
  { id: 3, name: 'Dairy Products', image: 'image/cat-3.png' },
  { id: 4, name: 'Bakery', image: 'image/cat-4.png' },
];

const ProductCategory = () => {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">Product <span>Categories</span></h1>
      <div className="category-container">
        {categories.map(category => (
          <div key={category.id} className="category-box">
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            <Link to={`/category/${category.id}`} className="btn">Shop Now <ShoppingCart /></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;

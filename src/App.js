import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import ProductCard from './ProductCard';

const products = [
  {
    title: "Apple iPhone 13",
    price: "79,999",
    productImage: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg"
  },
  {
    title: "Samsung Galaxy Note 20",
    price: "59,999",
    productImage: "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg$"
  },
  {
  title: "Apple Macbook Pro M1 Max",
  price: "249,999", 
  productImage: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_M1-Pro-M1-Max_Silicon-Family_10182021_big_carousel.jpg.slideshow-xlarge_2x.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {/* Call it as a markup and not a function call */}
      <Greet name="Mohit" age="25"/>
      {/* The map returns loops through the products array, implements the function on each element and stores it in a new array
      React also returns the elements of the array one by one */}
      {products.map((product) => (
      <ProductCard
        title={product.title}
        price={product.price}
        productImage={product.productImage}
        />
      ))}
    </div>
  );
}

export default App;

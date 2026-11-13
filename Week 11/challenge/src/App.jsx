import ProductCard from './ProductCard';

const products = [
  {
    id: 'earbuds',
    name: 'Wireless Earbuds',
    price: 89000,
    rating: 4.5,
    inStock: true,
    imageUrl: 'images/wireless-earbuds.jpg'
  },
  {
    id: 'keyboard',
    name: 'Mechanical Keyboard',
    price: 124000,
    rating: 4.8,
    inStock: false,
    imageUrl: 'images/mechanical-keyboard.jpg'
  },
  {
    id: 'speaker',
    name: 'Bluetooth Speaker',
    price: 67000,
    rating: 4.0,
    inStock: true,
    imageUrl: 'images/bluetooth-speaker.jpg'
  }
];

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">Week 11 · React challenge</p>
        <h1>Product Cards</h1>
        <p>Each card is driven by props. Compare ratings and availability below.</p>
      </header>
      <section className="product-grid" aria-label="Products">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
}

export default App;

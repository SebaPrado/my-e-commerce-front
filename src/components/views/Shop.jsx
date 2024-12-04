import ProductList from "../ProductList";

function Shop() {
  return (
    <>
      <section className="shop-section">
        <div className="container mb-4">
          <h2 className="text-center space-letter"> Our Products</h2>
          <ProductList />
        </div>
      </section>
    </>
  );
}

export default Shop;

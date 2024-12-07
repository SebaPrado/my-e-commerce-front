import ProductList from "../ProductList";

function Shop() {
  return (
    <>
      <section className="shop-section">
        <div className="container mb-4">
          <div className="my-5">
          <h2 className="text-center space-letter ourProducts"> Our Products</h2>
          </div>
          <ProductList />
        </div>
      </section>
    </>
  );
}

export default Shop;

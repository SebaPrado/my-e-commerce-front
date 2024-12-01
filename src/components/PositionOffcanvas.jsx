import ShopOffcanvas from "./ShopOffcanvas";

function PositionOffcanvas() {
  return (
    <>
      {["end"].map((placement) => (
        <ShopOffcanvas key="1" placement={placement} name="Cart" />
      ))}
    </>
  );
}

export default PositionOffcanvas;

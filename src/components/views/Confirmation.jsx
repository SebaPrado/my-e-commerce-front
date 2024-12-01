import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cartSlice";

function Confirmation() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log("cart", cart.length);

  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <div className="container margin-contain">
      <div className="box-confirmation-success">
        <div className="img-info-confirmation-success">
          <div className="box-image-confirmation-success ">
            <img
              src="https://equalvision.com/cdn/shop/files/EVR_LOGO2_x117@2x.png?v=1614306916"
              alt=""
              className="mb-2 logo-confirmation"
            />
          </div>
          <div className="box-text-confirmation d-flex flex-column align-items-center  ">
            <span className="material-symbols-outlined  check-confirmation">
              check_circle
            </span>

            <div className="info-pay">
              <h3 className="text-center mb-5">Thank you for your purchase!</h3>
              <h5 className="m-0 sm-tex-conf">
                You should receive an order confirmation email shortly
              </h5>
            </div>
          </div>
          <div className=" box-botton-confirmation mt-3">
            <Link to="/">
              <button type="button" className="btn btn-dark btn-order">
                BACK TO SHOP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;

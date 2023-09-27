import React, { useState, useEffect } from "react";
import "../Cart/Cart.css";
import { useParams } from "react-router-dom";
import img_1 from "../Assets/img_1.png";
import img_2 from "../Assets/img_2.png";
import img_3 from "../Assets/img_3.png";

function Cart() {
  const { id } = useParams();
  const [productQuantities, setProductQuantities] = useState({});

  const products = [
    {
      id: 1,
      name: "Regular fit slogan",
      image: img_1,
      price: "INR 1,190",
    },
    {
      id: 2,
      name: "Regular fit polo",
      image: img_2,
      price: "INR 1,110",
    },
    {
      id: 3,
      name: "Regular fit color block",
      image: img_3,
      price: "INR 1,690",
    },
  ];

  const product = (products || []).find((p) => p.id === parseInt(id));

  // Function to increase the quantity of a product
  const increaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };
  // Function to decrease the quantity of a product
  const decreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[productId] > 0) {
        updatedQuantities[productId] -= 1;
      }
      return updatedQuantities;
    });
  };

  // Calculate the total quantity and amount
  const totalQuantity = Object.values(productQuantities).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  // Calculate the total amount based on quantities
  const totalAmount = products.reduce((acc, product) => {
    const quantity = productQuantities[product.id] || 0;
    const price = parseFloat(
      product.price.replace("INR ", "").replace(",", "")
    );
    return acc + quantity * price;
  }, 0);

  // Create a state variable to hold the subtotal value
  const [subtotal, setSubtotal] = useState(0);

  // Calculate the subtotal when the component mounts or when products change
  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      // Extract the numeric value from the price string and add it to the total
      const price = parseFloat(
        product.price.replace("INR ", "").replace(",", "")
      );

      const quantity = productQuantities[product.id] || 0;

      total += price;
    });

    // Set the subtotal state
    setSubtotal(total);
  }, [products, productQuantities]);

  // Define VAT and shipping fee as constants
  const vat = 0.0; // Static VAT
  const shippingFee = 80.0; // Static shipping fee

  // Calculate the total by adding subtotal, VAT, and shipping fee
  const total = subtotal + vat + shippingFee;

  const deleteProduct = (productId) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  return (
    <div className="cart">
      <div className="cart-section">
        <div className="back-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-right">
              <path
                id="Icon"
                d="M19 12H5M5 12L12 5M5 12L12 19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="cart-txt">
          <p>My Cart</p>
        </div>
        <div className="notification-i">
          <svg
            className="bell-i"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bell-01">
              <path
                id="Icon"
                d="M9.35416 21C10.0593 21.6224 10.9855 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            className="bell-num"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2">
              <circle
                id="Ellipse 1"
                cx="7"
                cy="7"
                r="6.5"
                fill="black"
                stroke="white"
              />
              <path
                id="1"
                d="M7.86415 9.71971V5H6V5.83782H6.89367V9.71971H7.86415Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="cart-details">
        {products.map((product, index) => (
          <div className={`detail`} key={product.id}>
            <div>
              <img
                className="w-[83px] h-[89px]"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="product-details-1">
              <div className="product-n">{product.name}</div>
              <div className="product-s">Size M</div>
              <div className="product-p">{product.price}</div>
            </div>
            <div className="product-details-2">
              <div
                className="delete-option"
                onClick={() => deleteProduct(product.id)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="trash-03">
                    <path
                      id="Icon"
                      d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
                      stroke="#F70000"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="quantity-details">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <div className="quantity">
                  {productQuantities[product.id] || 0}
                </div>
                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="voucher-section">
        <div className="voucher-s">Add Voucher</div>
      </div>
      <div className="total-details">
        <div className="sub-total">
          <div className="sub-txt">Sub-total</div>
          <div className="sub-value">INR {subtotal.toFixed(2)}</div>
        </div>
        <div className="vat">
          <div className="vat-txt">VAT (%)</div>
          <div className="vat-value">INR {vat.toFixed(2)}</div>
        </div>
        <div className="shipping-fee">
          <div className="shipping-txt">Shipping-fee</div>
          <div className="shipping-value">INR {shippingFee.toFixed(2)}</div>
        </div>
        <div className="line"></div>
        <div className="total">
          <div className="total-txt">Total</div>
          <div className="total-value">INR {total.toFixed(2)}</div>
        </div>
      </div>
      <div className="navbar-down">
        <button className="checkout-b">
          Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Cart;

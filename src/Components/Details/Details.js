import React from "react";
import "../Details/Details.css";
import product from "../Home/Home";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import img_1 from "../Assets/img_1.png";
import img_2 from "../Assets/img_2.png";
import img_3 from "../Assets/img_3.png";
import img_4 from "../Assets/img_4.png";
import img_5 from "../Assets/img_5.png";
import img_6 from "../Assets/img_6.png";

function Details() {
  const { id } = useParams();

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
    {
      id: 4,
      name: "Regular fit v-neck",
      image: img_4,
      price: "INR 1,290",
    },
    {
      id: 5,
      name: "Regular fit v-neck",
      image: img_5,
      price: "INR 1,290",
    },
    {
      id: 6,
      name: "Regular fit polo",
      image: img_6,
      price: "INR 1,110",
    },
  ];

  const product = (products || []).find((p) => p.id === parseInt(id));

  return (
    <div className="details">
      <div className="details-section">
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
        <div className="details-txt">
          <p>Details</p>
        </div>
        <div className="notification-icons">
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
      <div className="image-section" key={product.id}>
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="content">
        <div className="product-name" key={product.id}>
          {product.name}
        </div>
        <div className="reviews">
          <div className="star-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="star-01">
                <path
                  id="Icon"
                  d="M11.2826 3.4533C11.5131 2.98636 11.6284 2.75289 11.7848 2.6783C11.9209 2.6134 12.0791 2.6134 12.2152 2.6783C12.3716 2.75289 12.4869 2.98636 12.7174 3.4533L14.904 7.88327C14.9721 8.02112 15.0061 8.09004 15.0558 8.14356C15.0999 8.19094 15.1527 8.22933 15.2113 8.25661C15.2775 8.28741 15.3536 8.29852 15.5057 8.32076L20.397 9.03569C20.912 9.11098 21.1696 9.14862 21.2888 9.27442C21.3925 9.38388 21.4412 9.53428 21.4215 9.68376C21.3988 9.85556 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1911 13.9538 17.136 14.0075 17.1004 14.0714C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.9059 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7553 20.57 17.607 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8583 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8583 11.7639 17.8942 11.6276 17.9658L7.25491 20.2654C6.7939 20.5078 6.5634 20.6291 6.39296 20.5975C6.24467 20.57 6.11671 20.477 6.04472 20.3445C5.96199 20.1922 6.00601 19.9355 6.09406 19.4221L6.92887 14.5547C6.9549 14.403 6.96791 14.3271 6.9591 14.2545C6.95131 14.1902 6.9311 14.128 6.89959 14.0714C6.86401 14.0075 6.80886 13.9538 6.69857 13.8464L3.16054 10.4004C2.78765 10.0372 2.6012 9.85556 2.57851 9.68376C2.55877 9.53428 2.60754 9.38388 2.71124 9.27442C2.83042 9.14862 3.08796 9.11098 3.60303 9.03569L8.4943 8.32076C8.64641 8.29852 8.72247 8.28741 8.7887 8.25661C8.84735 8.22933 8.90015 8.19094 8.94417 8.14356C8.99389 8.09004 9.02791 8.02112 9.09596 7.88327L11.2826 3.4533Z"
                  fill="#FFA928"
                />
              </g>
            </svg>
          </div>
          <div className="reviews-txt">
            <div className="reviews-txt-1">4.5/5</div>
            <div className="reviews-txt-2">(45 reviews)</div>
          </div>
        </div>
        <div className="product-txt">
          <p>
            The name says it all, the right size slightly snugs the body leaving
            enough room for comfort in the sleeves and waist.
          </p>
        </div>
        <div className="choose-txt">Choose size</div>
        <div className="sizes">
          <button className="size-s">
            <p>S</p>
          </button>
          <button className="size-m">
            <p>M</p>
          </button>
          <button className="size-l">
            <p>L</p>
          </button>
        </div>
      </div>
      <div className="navbar-d">
        <div className="price-section">
          <span className="p-t">Price</span>
          <span className="p-value">{product.price}</span>
        </div>
        <Link to="/cart">
          <button className="add-to-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M16.4996 8C16.4996 9.06087 16.0782 10.0783 15.328 10.8284C14.5779 11.5786 13.5605 12 12.4996 12C11.4387 12 10.4213 11.5786 9.67116 10.8284C8.92102 10.0783 8.49959 9.06087 8.49959 8M4.13281 7.40138L3.43281 15.8014C3.28243 17.6059 3.20724 18.5082 3.51227 19.2042C3.78027 19.8157 4.24462 20.3204 4.83177 20.6382C5.50006 21 6.40545 21 8.21623 21H16.783C18.5937 21 19.4991 21 20.1674 20.6382C20.7546 20.3204 21.2189 19.8157 21.4869 19.2042C21.7919 18.5082 21.7167 17.6059 21.5664 15.8014L20.8664 7.40138C20.737 5.84875 20.6723 5.07243 20.3285 4.48486C20.0257 3.96744 19.5748 3.5526 19.0341 3.29385C18.42 3 17.641 3 16.083 3L8.91623 3C7.35821 3 6.57921 3 5.9651 3.29384C5.42433 3.5526 4.97349 3.96744 4.67071 4.48486C4.32689 5.07243 4.26219 5.84875 4.13281 7.40138Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;

import React, { useState } from "react";
import "../Home/Home.css";
import img_1 from "../Assets/img_1.png";
import img_2 from "../Assets/img_2.png";
import img_3 from "../Assets/img_3.png";
import img_4 from "../Assets/img_4.png";
import img_5 from "../Assets/img_5.png";
import img_6 from "../Assets/img_6.png";
import Details from "../Details/Details";
import { Link } from "react-router-dom";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="home">
      <div className="discover-section">
        <div className="discover-text">Discover</div>
        <div className="notification">
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
      <div className="search-section">
        <div className="search-bar">
          <div>
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search-lg">
                <path
                  id="Icon"
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <div>
            <p className="search-txt">Search anything</p>
          </div>
        </div>
        <div className="filter-icon">
          <svg
            className="filter-lines"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 12H18M3 6H21M9 18H15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-all">
          <div className="filter-all-txt">All</div>
        </div>
        <div className="filter-men">
          <div className="filter-men-txt">Men</div>
        </div>
        <div className="filter-women">
          <div className="filter-women-txt">Women</div>
        </div>
        <div className="filter-kids">
          <div className="filter-kids-txt">Kids</div>
        </div>
      </div>
      <div className="item-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div onClick={() => handleProductClick(product)}>
              <img src={product.image} />
              <p className="p-name">{product.name}</p>
              <p className="p-price">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      {selectedProduct && (
        <Details product={selectedProduct} products={products} />
      )}
      <div className="navbar-b">
        <div className="nav-contents">
          <div className="nav-home">
            <span className="nav-home-icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="home-line">
                  <path
                    id="Icon"
                    d="M8.5 17H16.5M11.5177 2.76403L4.73539 8.03916C4.28202 8.39178 4.05534 8.56809 3.89203 8.78889C3.74737 8.98447 3.6396 9.20481 3.57403 9.43908C3.5 9.70355 3.5 9.99073 3.5 10.5651V17.8C3.5 18.9201 3.5 19.4802 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.5651C21.5 9.99073 21.5 9.70355 21.426 9.43908C21.3604 9.20481 21.2526 8.98447 21.108 8.78889C20.9447 8.56809 20.718 8.39178 20.2646 8.03916L13.4823 2.76403C13.131 2.49078 12.9553 2.35415 12.7613 2.30163C12.5902 2.25529 12.4098 2.25529 12.2387 2.30163C12.0447 2.35415 11.869 2.49078 11.5177 2.76403Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="nav-home-txt">Home</span>
          </div>
          <div className="nav-heart">
            <span className="nav-heart-icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="activity-heart">
                  <path
                    id="Icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4932 5.13581C10.4938 2.7984 7.15975 2.16964 4.65469 4.31001C2.14964 6.45038 1.79697 10.029 3.7642 12.5604C5.25009 14.4724 9.47129 18.311 11.448 20.0749C11.8114 20.3991 11.9931 20.5613 12.2058 20.6251C12.3905 20.6805 12.5958 20.6805 12.7805 20.6251C12.9932 20.5613 13.1749 20.3991 13.5383 20.0749C15.515 18.311 19.7362 14.4724 21.2221 12.5604C23.1893 10.029 22.8797 6.42787 20.3316 4.31001C17.7835 2.19216 14.4925 2.7984 12.4932 5.13581Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="nav-heart-txt">Saved</span>
          </div>
          <div className="nav-cart">
            <span className="nav-cart-icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="shopping-bag-03">
                  <path
                    id="Icon"
                    d="M16.4996 8C16.4996 9.06087 16.0782 10.0783 15.328 10.8284C14.5779 11.5786 13.5605 12 12.4996 12C11.4387 12 10.4213 11.5786 9.67116 10.8284C8.92102 10.0783 8.49959 9.06087 8.49959 8M4.13281 7.40138L3.43281 15.8014C3.28243 17.6059 3.20724 18.5082 3.51227 19.2042C3.78027 19.8157 4.24462 20.3204 4.83177 20.6382C5.50006 21 6.40545 21 8.21623 21H16.783C18.5937 21 19.4991 21 20.1674 20.6382C20.7546 20.3204 21.2189 19.8157 21.4869 19.2042C21.7919 18.5082 21.7167 17.6059 21.5664 15.8014L20.8664 7.40138C20.737 5.84875 20.6723 5.07243 20.3285 4.48486C20.0257 3.96744 19.5748 3.5526 19.0341 3.29385C18.42 3 17.641 3 16.083 3L8.91623 3C7.35821 3 6.57921 3 5.9651 3.29384C5.42433 3.5526 4.97349 3.96744 4.67071 4.48486C4.32689 5.07243 4.26219 5.84875 4.13281 7.40138Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="nav-cart-txt">Cart</span>
          </div>
          <div className="nav-settings">
            <span className="nav-cart-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="settings-02">
                  <g id="Icon">
                    <path
                      d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"
                      stroke="black"
                      stroke-opacity="0.6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      stroke-opacity="0.6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <span className="nav-cart-txt">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

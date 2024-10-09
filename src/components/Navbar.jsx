import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { totalQuantity, totalAmount } = useContext(ProductContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen ? "Menu open" : "not menu open");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar bg-base-200 sticky top-0 right-0 left-0 z-10 p-4">
        <div className="flex-1">
          <Link to="/">
            <span className="btn btn-ghost normal-case text-xl">
              E-COMMERCE-STORE
            </span>
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex-none lg:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Popup menu for mobile view */}
        {isMenuOpen && (
          <ul className="lg:hidden menu bg-base-200 absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-lg shadow-lg border border-gray-300">
            <li>
              <Link to="/home" className="block " onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/BasketPage" className="block " onClick={closeMenu}>
                BASKET
              </Link>
            </li>
          </ul>
        )}

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex flex-none">
          <div className="flex justify-between space-x-4">
            <Link to="/home">
              <span className="btn btn-ghost text-lg">HOME</span>
            </Link>
            <Link to="/BasketPage">
              <span className="btn btn-ghost text-lg">BASKET</span>
            </Link>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item mr-6 mt-[35px]">
                  <p> Qty-{totalQuantity}</p>
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  Total-Items-({totalQuantity})<p> </p>
                </span>
                <span className="text-info">
                  Subtotal: $ {totalAmount.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link to="/BasketPage" className="btn btn-primary btn-block">
                    View Basket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

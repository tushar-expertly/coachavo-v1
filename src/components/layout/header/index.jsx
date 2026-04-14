import React, { useState } from "react";
import ExpertlyLogoLogin from "../../../Assets/logo/ExpertlyLogoLogin.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cart_context";
import { useAuth } from "../../../context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import profilePNG from "../../../Assets/profilePNG.png";

function Header() {
  const { total_items } = useCartContext();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const FullName = localStorage.getItem("username");

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img
              src={ExpertlyLogoLogin}
              alt="Expertlylogo"
              className="h-10 w -10"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/training"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Training
            </Link>
            <Link
              to="/archive"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Archive
            </Link>
          </nav>

          {/* Desktop Auth + Cart */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
              </svg>
              {total_items > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {total_items}
                </span>
              )}
            </Link>
            {user ? (
              <>
                {/* Greeting */}
                <div className="text-gray-700 text-left">
                  <span className="font-medium">Hello, </span>
                  {/* <br /> */}
                  <span className="font-medium">{FullName}</span>
                </div>

                {/* Avatar + Dropdown */}
                <div className="relative">
                  <button
                    onClick={handleUserMenuToggle}
                    className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-600"
                  >
                    <img
                      src={profilePNG}
                      alt={FullName}
                      className="h-10 w-10 object-cover"
                    />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/myOrders"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
              </svg>
              {total_items > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {total_items}
                </span>
              )}
            </Link>

            {/* Avatar (mobile, dropdown same as desktop) */}
            {user && (
              <div className="relative">
                <button
                  onClick={handleUserMenuToggle}
                  className="h-8 w-8 rounded-full overflow-hidden border-2 border-blue-600"
                >
                  <img
                    src={profilePNG}
                    alt={FullName}
                    className="h-8 w-8 object-cover"
                  />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/myOrders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl">&#10005;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/training"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Training
              </Link>
              <Link
                to="/archive"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Archive
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

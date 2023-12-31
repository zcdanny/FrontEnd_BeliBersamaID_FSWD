import { Box, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Cart from "./Cart";
import LogoutButton from "./LogoutButton";
import "./Navbar.css";

const NavBar = ({ user }) => {
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(location.pathname);
  const cart = useContext(CartContext);
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH;
  const totalQuantityItems = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    setSelectedPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Box
        bg="#336699"
        w="100%"
        h="80px"
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <div id="logoAndHeading">
          <img
            width="70px"
            src={`./assets/logo/logo.png`}
          />
          <Heading textAlign="left" padding="12px 0 0 10px" color="white">
            BeliBersamaID
          </Heading>
        </div>
        <nav id="navBar">
          <Link
            className={selectedPage === "/" ? "selectedNavItem" : "navItem"}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              selectedPage === "/store" ? "selectedNavItem" : "navItem"
            }
            to="/store"
          >
            Store
          </Link>
          {user && (
            <Link
              className={
                selectedPage === "/account" ? "selectedNavItem" : "navItem"
              }
              to="/account"
            >
              Account
            </Link>
          )}
          {user && (
            <Link className="navItem">
              <LogoutButton>Logout</LogoutButton>
            </Link>
          )}
          {!user && (
            <Link
              className={
                selectedPage === "/login" ? "selectedNavItem" : "navItem"
              }
              to="/login"
            >
              Login
            </Link>
          )}
          <span className="cartIcon" onClick={() => handleShowCart()}>
            <i
              className={totalQuantityItems > 0 ? "fa badge" : "fa"}
              style={{ fontSize: "24px" }}
              value={totalQuantityItems}
            >
              &#xf07a;
            </i>
          </span>
          <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
        </nav>
      </Box>
    </>
  );
};

export default NavBar;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PositionOffcanvas from "./PositionOffcanvas";
import { useSelector, useDispatch } from "react-redux";
import { notify } from "../notify";
import { logout } from "../redux/userSlice";

const ShopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleToast = () => {
    notify("This feature is not within the scope of the project.");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userFirstname);

  const isLogged = () => {
    if (token) {
      return (
        <Dropdown.Menu className="dropdown-navbar-logout dropdown-navbar-1 ">
          <Dropdown.Item
            onClick={handleLogout}
            as={Link}
            to={`/`}
            className="dropdown-navbar-select"
          >
            LOG OUT
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    } else {
      return (
        <Dropdown.Menu className="dropdown-navbar-1 ">
          <Dropdown.Item
            as={Link}
            to={`/login`}
            className="dropdown-navbar-select"
          >
            LOG IN
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={`/signup`}
            className="dropdown-navbar-select"
          >
            SIGN UP
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    }
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        className="custom-nvbar custom-nvbar-sm nav"
      >
        <Container className="">
          <Link to="/" className="text-black logo ">
            <img
              src="/img/equal-vision-logo-navbar.webp"
              alt="Equal Vision Records"
              itemProp="logo"
              width="50rem"
            ></img>
          </Link>
          <Navbar.Toggle aria-controls="navbarNav" className="text-white " />
          <Navbar.Collapse id="navbarNav" className="text-white">
            <Nav className="ms-auto text-white">
              <Link to="/about" className="nav-items nav-about">
                About this project
              </Link>
              <Link to="/products" className=" nav-items nav-about">
                Products
              </Link>
              <a
                href="https://equalvisiondashboard.vercel.app/"
                target="_blank"
                className=" nav-items nav-about  "
              >
                Dashboard
              </a>
              <div className=" icon-p">
                <div className="mt-1">
                  <Dropdown>
                    <div className="icon-login-nav">
                      <Dropdown.Toggle
                        as={FontAwesomeIcon}
                        icon={faUser}
                        color="red"
                        className="nav-items nav-items-sm arrow-icon-login size-icon-item"
                        id="dropdown-basic"
                        type="button"
                      />
                      <Dropdown.Toggle
                        className="arrow-icon-arrow"
                        icon="fa-thin fa-caret-down"
                      />

                      {token && (
                        <div>
                          <p className="name-navbar">{userName}</p>
                        </div>
                      )}
                    </div>
                    {isLogged()}
                  </Dropdown>

                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    color=""
                    className="nav-items size-icon-nav-2"
                    onClick={handleToast}
                  />
                  <PositionOffcanvas />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ShopNavbar;

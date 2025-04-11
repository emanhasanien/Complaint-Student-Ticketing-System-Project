import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AuthService from "../../AuthService";
const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" dir="rtl">
        <div className="container">
          <Link className="navbar-brand text-white" to={"/ادمن/لوحة التحكم"}>
            <img
              src={logo}
              alt="لوجو المبادرة"
              height={"70px"}
              className="me-3"
            />
            مبادرة رواد مصر الرقمية
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/admin/dashboard"}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/ادمن/الشكاوي"}>
                  الشكاوي
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={"/ادمن/التحليلات"}>
                  التحليلات
                </NavLink>
              </li>

            </ul>

            <button className="btn btn-primary" onClick={handleLogout}>
              تسجيل الخروج{" "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;

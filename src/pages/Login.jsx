import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../AuthService";

const Login = ()=> {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlLogin = async () => {
    try {
      const user = await AuthService.login(email);
      if (user.role === "admin") {
        navigate("/ادمن/لوحة التحكم");
      } else{
        navigate("/طالب/لوحة التحكم");
      }
    } catch {
      setError("  البريد الإلكتروني غير صحيح");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="d-flex justify-content-between align-items-center flex-row mb-4">
          <h5 className="fw-bold mb-0 text-center">
            <span className="d-block">رواد</span>
            <span className="d-block">مصر الرقمية</span>
          </h5>
          <img src={logo} alt="لوجو المبادرة" height="50" />
        </div>
        <form className=" m-auto" style={{ width: "100%", maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label">اسم المستخدم</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label ">الايميل </label>
            <input
              type="email"
              className="form-control"
              placeholder="ادخل بريدك الالكتروني"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 text-end">
            <a href="#" className="text-decoration-none text-dark">
              نسيت كلمة المرور؟
            </a>
          </div>

          <button
            type="submit"
            className="btn w-50 d-block mx-auto text-white"
            style={{ backgroundColor: "#1058B5", borderColor: "#1058B5" }}
            onClick={handlLogin}
          >
            دخول
          </button>
          <div className="mt-3 text-center">
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
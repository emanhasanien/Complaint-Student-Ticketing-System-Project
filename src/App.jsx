import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ComplaintList from "./pages//Student/ComplaintList";
import FQA from "./pages//Student/FQA";
import ContactUs from "./pages//Student/ContactUs";
import { Footer } from "./UI-Components/Footer";
import SubmitComplaint from "./pages/Student/SubmitComplaint";
import StudentDashboard from "./pages/Student/StudentDashboard";
import ComplaintDetails from "./pages/Student/ComplaintDetails";
import FeedbackForm from "./pages/feedback/FeedbackForm";
import FeedbackList from "./pages/feedback/FeedbackList";
import { useState } from "react";
import ComplaintsManagement from "./pages/Admin/ComplaintsManagement";
import AuthService from "./AuthService";
import ProtectedRoute from "./pages/ProtectedRoute";
import Login from "./pages/Login";
import StudentNavbar from "./UI-Components/StudentNavbar";
import AdminNavbar from "./pages/Admin/AdminNavbar";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  const user = AuthService.getUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const [feedback, setFeedback] = useState([]);
  console.log(feedback)

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const addFeedback = (feedback) => {
    setFeedback((prev) => [...prev, feedback]);
  };

  const hideFooterPages = ["/login"];

  return (
    <>
      {user?.role === "student" && <StudentNavbar />}
      {user?.role === "admin" && <AdminNavbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        {/* student routes */}
        <Route
          path="/طالب/لوحة التحكم"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/طالب/تقديم شكوي"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <SubmitComplaint />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/طالب/الشكاوي"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <ComplaintList />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/طالب/الاسئلة الشائعة" element={<FQA />}></Route>
        <Route path="/طالب/التواصل مع الدعم" element={<ContactUs />}></Route>
        <Route path="/طالب/تقيم الخدمة" element={<FeedbackForm addFeedback={addFeedback}  />}></Route>
        <Route
          path="/طالب/كل التقيمات"
          element={
            <FeedbackList feedback={feedback} />
          }
        />

        {/* admin routes */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              {user?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )}
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/ادمن/الشكاوي"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ComplaintsManagement />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/ادمن/الشكاوي/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ComplaintDetails />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/ادمن/التحليلات"
          element={<ProtectedRoute allowedRoles={["admin"]}></ProtectedRoute>}
        ></Route>

        <Route path="*" element={<Navigate to={"/login"} />}></Route>
      </Routes>

      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;

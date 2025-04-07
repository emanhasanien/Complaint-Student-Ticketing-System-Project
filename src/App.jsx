import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ComplaintList from "./pages//Student/ComplaintList";
import FQA from "./pages//Student/FQA";
import ContactUs from "./pages//Student/ContactUs";
import StudentNavbar from "./UI-Components/StudentNavbar";
import { Footer } from "./UI-Components/Footer";
import SubmitComplaint from "./pages/Student/SubmitComplaint";
import StudentDashboard from "./pages/Student/StudentDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ComplaintsManagement from "./pages/Admin/ComplaintsManagement";
import AdminLogin from "./pages/Admin/AdminLogin";
import StudentLogin from "./pages/Student/StudentLogin";
import NotificationCenter from "./UI-Components/NotificationCenter";
import AdminNavbar from "./pages/Admin/AdminNavbar";

const App = () => {
  const isAdminLogin = window.location.pathname === '/'; 

  return (
    <BrowserRouter>
      {!isAdminLogin && <StudentNavbar />} 
      
      <Routes>
        {/* student routes */}
        <Route path="/طالب/لوحة التحكم" element={<StudentDashboard/>}></Route>
        <Route path="/طالب/تقديم شكوي" element={<SubmitComplaint />}></Route>
        <Route path="/طالب/الشكاوي" element={<ComplaintList />}></Route>
        <Route path="/طالب/الاسئلة الشائعة" element={<FQA />}></Route>
        <Route path="/طالب/التواصل مع الدعم" element={<ContactUs />}></Route>
        <Route path="/student/login" element={<StudentLogin/>}></Route>

        
      
      
        {/* admin routes */}
        <Route path="/" element={<AdminLogin/>}></Route>
        <Route path="/ادمن/لوحة التحكم" element={<AdminDashboard/>}></Route>
        <Route path="/ادمن/الشكاوي" element={<ComplaintsManagement/>}></Route>
        <Route path="/ادمن/التحليلات" element={<AdminDashboard/>}></Route>
        <Route path="/notifications" element={<NotificationCenter />} />

        <Route path="*" element={<Navigate to={'/'} />}></Route>
      </Routes>
      
      {!isAdminLogin && <Footer />} 
    </BrowserRouter>
  );
};

export default App;

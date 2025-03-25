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

const App = () => {
  return (
    <BrowserRouter>

  

     <StudentNavbar />
    
       
          <Routes>

               {/* student routes  */}
           
            <Route path="/طالب/لوحة التحكم" element={<StudentDashboard/>}></Route>
            <Route path="/طالب/تقديم شكوي" element={<SubmitComplaint />}></Route>
            <Route path="/طالب/الشكاوي" element={<ComplaintList />}></Route>
            <Route path= "/طالب/الاسئلة الشائعة" element={<FQA />}></Route>
            <Route path= "/طالب/التواصل مع الدعم" element={<ContactUs />}></Route>


               {/* admin routes  */}
               <Route path="/ادمن/لوحة التحكم" element={<AdminDashboard/>}></Route>
               <Route path="/ادمن/الشكاوي" element={<ComplaintsManagement/>}></Route>
               <Route path="/ادمن/المراجعات" element={<AdminDashboard/>}></Route>

               <Route path="*" element={<Navigate to={'/'}/>}></Route>

          </Routes>
      

        <Footer />
      
    </BrowserRouter>
  );
};

export default App;

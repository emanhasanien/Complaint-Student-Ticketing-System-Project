import React from 'react'
import {  NavLink } from 'react-router-dom'
import StudentNavbar from '../../UI-Components/StudentNavbar';

const StudentDashboard = () => {
  return (
    <>

    <section  className='student-home'>
    
    <div className='student-main-content'>
    <h2 >نرحب بكم في منصة تقديم الشكاوى والاستفسارات لمبادرة رواد مصر الرقمية</h2>
    <NavLink className='submit-complaint-link' to={"/طالب/تقديم شكوي"}> تقديم شكوي</NavLink>
     
    </div>
    </section>
    
    
    </>
  )
}

export default StudentDashboard;
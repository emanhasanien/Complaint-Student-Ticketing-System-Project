import React from 'react';
import logo from '../../assets/images/logo.png';

export default function StudentLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="d-flex justify-content-between align-items-center flex-row mb-4">
          <h5 className="fw-bold mb-0 text-center">
            <span className="d-block">رواد</span>
            <span className="d-block">مصر الرقمية</span>
          </h5>   
          <img src={logo} alt="لوجو المبادرة" height="50" />
        </div>
        <form className='m-auto' style={{ width: '100%', maxWidth: '400px' }}>
          <div className="mb-3">
            <label className="form-label">الرقم القومي</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-control" />
          </div>
          <button type="submit" className="btn w-50 d-block mx-auto text-white" style={{ backgroundColor: '#1058B5', borderColor: '#1058B5' }}>دخول</button>
        </form>
      </div>
    </div>
  );
}

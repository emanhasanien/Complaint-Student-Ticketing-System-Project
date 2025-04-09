import React, { useState } from "react";
import { saveDataToJsonFile } from "./ComplaintService";
const SubmitComplaint = () => {
  const [complaint, setComplaint] = useState({
    id: "",
    studentId: "201",
    title: "",
    description: "",
    category: "",
    status: "جديد",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setComplaint((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toISOString().slice(0, 19);

    const submitedComplaint = {
      ...complaint,
      createdAt: date,
      updatedAt: date,
    };

    setComplaint(() => {
      return submitedComplaint;
    });

    saveDataToJsonFile(submitedComplaint);
  };

  return (
    <section className="submit-complaint">
      <div className="box">
        <form onSubmit={handleSubmit} className="form">
          <h1>نموذج تقديم شكوى</h1>
          <input
            className="form_input form-control"
            type="text"
            name="title"
            placeholder="عنوان الشكوى"
            value={complaint.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="form_input form-control"
            name="description"
            placeholder="وصف المشكلة"
            value={complaint.description}
            onChange={handleChange}
            required
          />
          <select
            className="form_input form-control"
            name="category"
            value={complaint.category}
            onChange={handleChange}
          >
            <option value="أكاديمي">أكاديمي</option>
            <option value="مرافق">مرافق</option>
            <option value="خدمات">خدمات</option>
          </select>
          <button className="new btn btn-primary" type="submit">
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitComplaint;

import React from "react";
import { useParams } from "react-router-dom";
import complaintsData from "../../MocData/Complaints.json";

const ComplaintDetails = () => {
  const { id } = useParams();

  // Find complaint by ID
  const complaint = complaintsData.find((c) => c.id == id);

  if (!complaint) return <div>لا توجد شكوى لعرضها.</div>;

  return (
    <div className="complaint-details-container p-4 bg-white rounded-2xl shadow-md">
      <div className="mb-4">عرض تفاصيل الشكوى رقم: {id}</div>
      <h2 className="text-xl font-bold mb-4">تفاصيل الشكوى</h2>

      <div className="mb-2">
        <span className="font-semibold">عنوان الشكوى: </span>
        <span>{complaint.title}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">الوصف: </span>
        <span>{complaint.description}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">الفئة: </span>
        <span>{complaint.category}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">الحالة: </span>
        <span>{complaint.status}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">تاريخ الإنشاء: </span>
        <span>{new Date(complaint.createdAt).toLocaleString()}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">آخر تحديث: </span>
        <span>{new Date(complaint.updatedAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ComplaintDetails;

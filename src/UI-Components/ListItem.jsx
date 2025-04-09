import React from "react";
import { useNavigate } from "react-router-dom";

export const ListItem = ({ id, title, status, handelClick }) => {
  let admin = false;
  if (handelClick !== undefined) {
    admin = true;
  } else {
    admin = false;
  }

  // choosing complaint backgroundcolor according to status
  let statusClass = "";
  if (status == "جديدة") {
    statusClass = "new";
  } else if (status == "تم الحل") {
    statusClass = "resolved";
  } else if (status == "قيد المعالجة") {
    statusClass = "processing";
  }

  const showStatus = (e) => {
    const parent = e.target.parentElement;

    const t = parent.nextElementSibling;
    t.classList.toggle("show");
  };

  const navigate = useNavigate();

  const goToComplaintDetails = (id) => {
    navigate(`/ادمن/الشكوي/${id}`);
  };

  return (
    <div className="complaint-card" id={id}>
      <span className="complaint-title">{title}</span>
      <div className="complaint-details">
        <span className={`status ${statusClass}`}>{status}</span>
        {admin && (
          <i
            className="fa-regular fa-pen-to-square edit_icon"
            onClick={showStatus}
          ></i>
        )}
      </div>

      <div className="complaint__status">
        <div
          className="complaint__status-item new"
          onClick={(e) => handelClick(e, id)}
        >
          جديدة
        </div>
        <div
          className="complaint__status-item processing"
          onClick={(e) => handelClick(e, id)}
        >
          قيد المعالجة
        </div>

        <div
          className="complaint__status-item resolved"
          onClick={(e) => handelClick(e, id)}
        >
          تم الحل
        </div>
      </div>

      {admin && (
        <button className="btn" onClick={() => goToComplaintDetails(id)}>
          عرض التفاصيل
        </button>
      )}
    </div>
  );
};

import React from "react";

const FeedbackList = ({ feedback }) => {
  return (
    <div className="feedback-list">
      <h2 className="page-title">كل التقييمات</h2>

      {feedback.length > 0 ? (
        feedback.map((fb, index) => (
          <div key={index} className="feedback-card">
            <h3>{fb.name}</h3>
            <p>{fb.feedback}</p>
          </div>
        ))
      ) : (
        <p className="no-feedback">لا توجد تقييمات حالياً، كن أول من يشارك برأيه!</p>
      )}
    </div>
  );
};

export default FeedbackList;

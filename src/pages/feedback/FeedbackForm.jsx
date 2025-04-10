import React, { useState } from 'react';

const FeedbackForm = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !feedback) return;

    addFeedback({ name, feedback });

    setName('');
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>شارك برأيك في الموقع</h2>
        <input
          type="text"
          placeholder="اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="تعليقك"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit">حفظ التقييم</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

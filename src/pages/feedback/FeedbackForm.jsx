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
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Your Feedback</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;

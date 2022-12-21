import { useRef, useState } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const [feedbacks, setFeedbacks] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: email, feedback: feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const loadFeedbackHandler = (e) => {
    fetch("/api/feedback", {
      method: "GET",
    })
      .then((feedbacks) => feedbacks.json())
      .then((feedbacks) => setFeedbacks(feedbacks));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" name="feedback" ref={feedbackRef}></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <br />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbacks.map((feedback) => {
          return <li key={feedback.id}>{feedback.feedback}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;

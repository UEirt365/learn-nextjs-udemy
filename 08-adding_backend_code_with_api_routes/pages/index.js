import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    console.log({ email, feedback });
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
    </div>
  );
}

export default HomePage;

import { getFeedback } from "../api/feedback";

export default function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbacks.map((feedback) => {
        return <li key={feedback.id}>{feedback.feedback}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const feedbacks = getFeedback();
  return {
    props: {
      feedbacks,
    },
  };
}

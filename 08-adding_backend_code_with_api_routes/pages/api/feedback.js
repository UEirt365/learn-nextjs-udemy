const feedbacks = [];
export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().getTime(),
      email,
      feedback,
    };
    feedbacks.push(newFeedback);
    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    res.status(200).json(feedbacks);
  }
}

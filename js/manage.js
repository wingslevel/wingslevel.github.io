function add() {
  const data = load();
  data.push({
    topic: topic.value,
    subtopic: subtopic.value,
    question: q.value,
    answer: a.value,
    streak: 0,
    status: "learning"
  });
  save(data);
  alert("Question added");
}

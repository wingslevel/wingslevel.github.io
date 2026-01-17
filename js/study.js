let data = load();
let i = 0;
function next() {
  if (!data.length) {
    question.innerText = "No questions yet.";
    return;
  }
  question.innerText = data[i].question;
  answer.innerText = "";
}
function showAnswer() {
  answer.innerText = data[i].answer;
}
function mark(correct) {
  if (correct) {
    data[i].streak++;
    if (data[i].streak >= 3) data[i].status = "mastered";
  } else {
    data[i].streak = 0;
    data[i].status = "weak";
  }
  save(data);
  i = (i + 1) % data.length;
  next();
}
next();

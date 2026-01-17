const data = load();
const mastered = data.filter(q => q.status === "mastered").length;
const weak = data.filter(q => q.status === "weak").length;
stats.innerText = `Total: ${data.length} | Mastered: ${mastered} | Weak: ${weak}`;

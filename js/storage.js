const KEY = "wingslevel_questions";
function load() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}
function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

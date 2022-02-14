// Get modification time of the database
async function getModificationTime() {
  const url = "https://zerotrac.github.io/leetcode_problem_rating/data.json";
  const response = await fetch(url);
  const elem = document.getElementById("dbModificationTime");
  elem.innerHTML =
    "<b>Database last modified:</b> " +
    response.headers.get("Last-Modified") +
    "</b>";
}

getModificationTime();

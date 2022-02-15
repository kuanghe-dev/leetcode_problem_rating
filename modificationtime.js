function formatDate(date) {
  let result = moment(date).format('YYYY/MM/DD HH:mm');
  const timezone = -date.getTimezoneOffset() / 60;
  return result + ' GMT' + (timezone < 0 ? timezone : '+' + timezone);
}

// Get modification time of the database
async function getModificationTime() {
  const url = 'https://zerotrac.github.io/leetcode_problem_rating/data.json';
  const response = await fetch(url);

  const modificationTime = response.headers.get('Last-Modified');
  const date = new Date(modificationTime);
  const dateString = formatDate(date) + ' (' + moment(date).fromNow() + ')';
  const elem = document.getElementById('dbModificationTime');
  elem.innerHTML = '<b>Database last modified:</b> ' + dateString;
}

getModificationTime();

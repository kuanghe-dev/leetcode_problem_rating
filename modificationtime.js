function getRelativeTime(seconds) {
  let result = '';

  if (seconds < 60) {
    result = 'last minute';
  } else if (seconds < 3600) {
    result = 'last hour';
  } else if (seconds < 3600 * 24) {
    result = Math.round(seconds / 3600) + ' hours ago';
  } else if (seconds < 3600 * 24 * 2) {
    result = 'yesterday';
  } else {
    result = Math.round(seconds / (3600 * 24)) + ' days ago';
  }

  return result;
}

// Get modification time of the database
async function getModificationTime() {
  const url = 'https://zerotrac.github.io/leetcode_problem_rating/data.json';
  const response = await fetch(url);

  const modificationTime = response.headers.get('Last-Modified');
  const date = new Date(modificationTime);
  const diffInSeconds = (Date.now() - date.getTime()) / 1000.0;

  const elem = document.getElementById('dbModificationTime');
  const text =
    date.toString().slice(0, 33) + ' (' + getRelativeTime(diffInSeconds) + ')';
  elem.innerHTML = '<b>Database last modified:</b> ' + text;
}

getModificationTime();

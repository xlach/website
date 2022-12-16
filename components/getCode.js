var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

const finalDays = [`${year}-12-13`, `${year}-12-14`, `${year}-12-15`, `${year}-12-16`, `${year + 1}-5-30`, `${year + 1}-5-31`, `${year + 1}-06-01`];

const reviewDays = [`${year}-12-12`];

const fetchCode = async () => {
  if (date.getDay() === 0 || date.getDay() === 6) {
    document.getElementById('code-container').innerText = 'N/A';
    return;
  }
  const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=${day}&year=${year}`);
  return response.json();
}

function getCode() {
  fetchCode().then((json) => {
    if (json === ' ') {
      document.getElementById('code-container').innerText = 'no school!';
    }
    else if (reviewDays.includes(`${year}-${month}-${day}`)) {
      document.getElementById('code-container').innerText = `GO REVIEW!`;
    }
    else if (finalDays.includes(`${year}-${month}-${day}`)) {
      document.getElementById('code-container').innerText = (`finals :(`);
    }
    else {
      document.getElementById('code-container').innerText = (`${json.code}`);
    }
  })
}
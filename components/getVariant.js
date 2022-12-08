var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

const fetchVariant = async () => {

    const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=${day}&year=${year}`);
    return response.json();
}

function getVariant() {
    fetchVariant().then((json) => {
        if (json.variant) {
            if (json.variant === 'adjusted') {
                document.getElementById('variant-container').innerText = (`adjusted`);
            }
            else if (json.variant === 'special') {
                document.getElementById('variant-container').innerText = (`special`);
            }
            else if (json.variant === '') {
                document.getElementById('variant-container').innerText = (`normal`);
            }
        }
    })
}
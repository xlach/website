function getDay() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    document.getElementById('date-container').innerText = (month + "/" + day + "/" + year + " | " + date.toLocaleDateString('EN-en', { weekday: 'long' }));
}
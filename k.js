var year = document.getElementById('copyright');

var today = new Date();

var currentyear = today.getFullYear();

year.innerHTML = `&copy;${currentyear}`
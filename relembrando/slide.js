var counter = 2;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    console.log(counter)
    counter++;
    if (counter > 15) {
        counter = 1;
    }
}, 5000);
// Progress Bar
function increase() {
    let Speed = 40;
    let limit = parseInt(document.getElementById("value1").innerHTML, 10);

    for(let i = 0; i <= limit; i++) {
        setTimeout(function () {
            document.getElementById("value1").innerHTML = i + "%";
        }, Speed * i);
    }
}
increase();

// Animated Text

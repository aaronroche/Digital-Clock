// Variables
const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

//Functions
function updateClock()
{
    // More variables
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    // Conditional
    if (h > 12)
    {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Modifiers
    hours.innerText =  h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = ampm;

    // Function call every second
    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();



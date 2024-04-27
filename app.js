let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

let count = 0;
let interval;

function startwatch() {
        console.log("startwatch");
        interval = setInterval(function () {
            count += 1;
            if (count === 60) {
                count = 0;
                second.innerHTML = count;
                minute.innerHTML = parseInt(minute.innerHTML) + 1;
                if (parseInt(minute.innerHTML) === 60) {
                    minute.innerHTML = '00';
                    hour.innerHTML = parseInt(hour.innerHTML) + 1;
                }
            } else {
                second.innerHTML = count < 10 ? '0' + count : count;
            }
        }, 1000);
    }

function stopwatch() {
    console.log("stopwatch");
    clearInterval(interval);
}

function resetwatch() {
    console.log("resetwatch");
    clearInterval(interval);
    count = 0;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
}
























let timer = document.querySelector("#timer");

interval_id = setInterval(function(){
    let hour = timer.innerHTML.slice(0, 2) - 0;
    let minut = timer.innerHTML.slice(3, 5) - 0;
    let sec = timer.innerHTML.slice(6) - 0;
    sec = sec - 1;
    if (sec == 0 && minut != 0){
        minut = minut - 1;
        sec = 59;
    };
    if (minut == 0 && hour != 0){
        hour = hour - 1;
        minut = 59;
    };
    hour = compareString(hour);
    minut = compareString(minut);
    sec = compareString(sec);
    
    timer.innerHTML = `${hour}:${minut}:${sec}`;
    if (hour == 0 && minut == 0 && sec == 0){
        alert('Вы победили!');
        clearInterval(interval_id);
    };
}, 1000)

function compareString(string) {
    if ((String(string).length == 1)){
        timeElement = `0${string}`;
        return timeElement;
    };
    return string;
};
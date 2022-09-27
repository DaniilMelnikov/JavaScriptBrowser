let speed = document.querySelector("#clicker__speed");

let lastElapsed = 0;
let start = new Date();
onclick = (event) => {
    if (event.target.id == 'cookie') {
        let counter = document.querySelector("#clicker__counter");
        counter.innerHTML = Number(counter.innerHTML) + 1;
        if (Number(counter.innerHTML) % 2) {
            event.target.width = 230;
        } else {
            event.target.width = 200;
        };
    }
    let end = new Date();
    let elapsed = end.getTime() - start.getTime();
    deltaElapsed = elapsed - lastElapsed;
    lastElapsed = elapsed;
    speed.innerHTML = (1 / (deltaElapsed / 1000)).toFixed(2);
}


function getHole(index) {return document.getElementById(`${index}`)};

onclick = (event) => {
    if (event.target.className == 'hole hole_has-mole') {
        getHole('dead').innerHTML = Number(getHole('dead').innerHTML) + 1;
    } else if (event.target.className == 'hole') {
        getHole('lost').innerHTML = Number(getHole('lost').innerHTML) + 1;
    };

    if (Number(getHole('lost').innerHTML) == 5) {
        alert('Вы проиграли!')
        getHole('lost').innerHTML = 0;
        getHole('dead').innerHTML = 0;
    } else if (Number(getHole('dead').innerHTML) == 5) {
        alert('Вы победили!')
        getHole('lost').innerHTML = 0;
        getHole('dead').innerHTML = 0;
    };
}
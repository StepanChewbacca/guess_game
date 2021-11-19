function addClassTo(item, clas) {
    item.classList.add(clas);
}

function removeClassTo(item, clas) {
    item.classList.remove(clas);
}


function changeClassAdd(clas) {
    count.classList.add(clas);
    helpText.classList.add(clas)
    if (clas === "well") {
        helpText.classList.add("guessCount")
    } else {
        guessCount.classList.add(clas)
    }
}

function changeClassDel(firstClas,secondClas) {
    count.classList.remove(firstClas, secondClas);
    helpText.classList.remove(firstClas, secondClas);
    // guessCount.classList.remove(firstClas, secondClas);
}

function green() {
    changeClassAdd('well');
    changeClassDel("normal","hard")
}

function yellow() {
    changeClassAdd('normal');
    changeClassDel("well","hard")
}

function red() {
    changeClassDel("well", "normal")
    changeClassAdd( 'hard');
}

function changeColor() {
    switch (true) {
        case (parseInt(count.innerText) >= numberOfAttempts):
            green();
            break;

        case (parseInt(count.innerText) >= 2)
        && (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts * 0.6)) &&
        (parseInt(count.innerText)) >= (Math.ceil(Math.ceil(numberOfAttempts / 3))):
            yellow();
            break;

        case (parseInt(count.innerText) === 1 || (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts / 3))):
            red();
            break;
    }
}


let kostil = 0
function changeStylesheet(qualifiedName){
    if ( kostil %2 === 0){
        document.getElementById('stylesheet').setAttribute('href', "styleTheme.css");
        kostil++
        console.log(kalil)
    } else {
        window.location.reload()
    }
}




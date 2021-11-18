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
    guessCount.classList.remove(firstClas, secondClas);
}

    function green() {
       changeClassAdd('well');
       changeClassDel("normal","hard")
    }
    
    function yellow() {
       changeClassDel("well","hard")
       changeClassAdd('normal');
    }

    function red() {
        changeClassDel("well", "normal")
        changeClassAdd(helpText, 'hard');
    }

    function changeColor() {
        switch (true) {
           case (parseInt(count.innerText) >= numberOfAttempts):
              green();
              break;
     
           case (parseInt(count.innerText) > 2) && (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts * 0.7)) && (parseInt(count.innerText)) >= (Math.ceil(numberOfAttempts * 0.41)):
              yellow();
              break;
     
           case (parseInt(count.innerText) === 1 || (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts * 0.4))):
              red();
              break;
        }
     }
function number_of_letters(myString, letter) {
    counter = 0;
    for (let i = 0; i < myString.length; i++) {
        if (letter === myString[i]) {
            counter++;
        }
    }
    console.log(counter);
}

number_of_letters('niagara', 'a')
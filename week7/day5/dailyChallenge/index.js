// Daily Challenge: Anagram;
const isAnagram = (str1, str2) => {
    let anagram = false;
    let lowerCaseStr1 = str1.toLowerCase().replaceAll(' ', '');
    let lowerCaseStr2 = str2.toLowerCase().replaceAll(' ', '');

    let arrStr1 = [...lowerCaseStr1];
    let arrStr2 = [...lowerCaseStr2];

    let arr1 = arrStr1.reduce((total, nextLetter) => {
        total[nextLetter] ? total[nextLetter]++ : total[nextLetter] = 1;
        return total;
    }, {});
    let arr2 = arrStr2.reduce((total, nextLetter) => {
        total[nextLetter] ? total[nextLetter]++ : total[nextLetter] = 1;
        return total;
    }, {});

    if (arrStr1.length === arrStr2.length) {
        if (arrStr1.every(letter => arrStr2.includes(letter))) {
            arrStr1.forEach(letter => {
                arr1[letter] === arr2[letter] ? anagram = true : anagram = false;
            });
        }
    }
    anagram ? console.log(str1, 'is an anagram of', str2) : console.log(str1, 'is not an anagram of', str2);
};
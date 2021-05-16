export const getRandomNumbers = (max, min, count) => {
    let numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i)
    }
    const randomList = []

    let numbers2 = numbers.concat(numbers)

    while (numbers2.length) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomList[random]) randomList[random] = numbers2.shift();
    }
    
    return randomList
}
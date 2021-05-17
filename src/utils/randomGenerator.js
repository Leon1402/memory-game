export const getRandomNumbers = (max, count) => {
    let numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i)
    }
    const randomList = []

    let numbers2 = numbers.concat(numbers)

    while (numbers2.length) {
        let random = Math.floor(Math.random() * (max + 1));
        if (!randomList[random]) randomList[random] = numbers2.shift();
    }
    
    return randomList
}
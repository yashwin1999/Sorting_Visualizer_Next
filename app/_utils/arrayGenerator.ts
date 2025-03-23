function arrayGenerator(nBars: number): number[] {
    let array: number[] = []
    for (let i = 0; i < nBars; i++) {
        array.push(randomNumberGenerator(100, 500));
    }
    console.log("array : ",array);
    return array;
}

function randomNumberGenerator(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

export { arrayGenerator };


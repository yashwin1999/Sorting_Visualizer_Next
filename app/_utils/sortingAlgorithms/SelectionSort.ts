interface step {
    indices: [number, number];
    type : string;
}

const selectionSort = (array: number[], steps:step[]) => {
    let min: number;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if ( array[j] < array[min] ) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp
        steps.push({ indices: [min, i], type: 'swap' });
    }
}

export default selectionSort;
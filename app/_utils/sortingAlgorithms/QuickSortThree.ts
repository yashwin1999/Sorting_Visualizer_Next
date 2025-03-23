interface step {
    indices: [number, number];
    type : string;
}
const swap = (array: number[], i: number, j: number) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

}


const midOfThree = (array: number[], low: number, high: number, steps: step[]) => {
    let mid = Math.floor((low + high) / 2);

    if (array[low] > array[mid]) {

        steps.push({ indices: [low, mid], type: 'swap' });

        swap(array, low, mid);
    }
    if (array[low] > array[high]) {

        steps.push({ indices: [low, high], type: 'swap' });
        swap(array, low, high);
    }
    if (array[mid] > array[high]) {
        steps.push({ indices: [mid, high], type: 'swap' });
        swap(array, mid, high);
    }
    return mid
}

const partition = (array: number[], low: number, high: number, steps: step[]) => {
    let medianIndex = midOfThree(array, low, high, steps);
    let pivot = array[medianIndex];
    if (medianIndex !== high) {

        steps.push({ indices: [medianIndex, high], type: 'swap' });
        swap(array, medianIndex, high);
    }

    let i = low - 1;

    for (let j = low; j< high; j++) {
        if ( array[j] <= pivot) {
            if (j >= array.length || i + 1 >= array.length) {
                console.error("Out of bounds detected in partition:", { j, i: i + 1, arrayLength: array.length });
            }
            i++;

            steps.push({ indices: [i, j], type: 'swap' });
            swap(array, i, j);
        }
    }

    steps.push({ indices: [i+1, high], type: 'swap' });
    swap(array, i + 1, high);
    return i + 1
}

const quickSort = (array: number[], low: number, high: number, steps: step[]) => {

    if (low < high) {

        let pivotIndex = partition(array, low, high, steps);

        quickSort(array, low, pivotIndex - 1, steps);
        quickSort(array, pivotIndex + 1, high, steps);
    }

}

const quickSortThree = (array: number[], steps:step[])=> {
    const low = 0;
    const high = array.length - 1;

    quickSort(array, low, high, steps);

}

export default quickSortThree;
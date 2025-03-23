const quickSortNormalTime = (arr: number[])=> {
    let array = arr.slice();

    const quickSortRecursive = (array: number[], low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(array, low, high);

            quickSortRecursive(array, low, pivotIndex - 1);
            quickSortRecursive(array, pivotIndex + 1, high);
        }
    };

    const partition = (array: number[], low: number, high: number): number => {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        [array[i + 1], array[high]] = [array[high], array[i + 1]];

        return i + 1;
    };

    quickSortRecursive(array, 0, array.length - 1);

}

export default quickSortNormalTime;
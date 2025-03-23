const quickSortThreeTime = (arr: number[]) => {
    let array = arr.slice();

    const quickSortRecursive = (array: number[], low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(array, low, high);

            quickSortRecursive(array, low, pivotIndex - 1);
            quickSortRecursive(array, pivotIndex + 1, high);
        }
    };

    const partition = (array: number[], low: number, high: number): number => {
        const mid = Math.floor((low + high) / 2);
        const pivotIndex = medianOfThree(array, low, mid, high);
        const pivot = array[pivotIndex];

        [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]]; // Swap
            }
        }

        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        return i + 1;
    };

    const medianOfThree = (array: number[], low: number, mid: number, high: number): number => {
        if (array[low] > array[mid]) [array[low], array[mid]] = [array[mid], array[low]];
        if (array[low] > array[high]) [array[low], array[high]] = [array[high], array[low]];
        if (array[mid] > array[high]) [array[mid], array[high]] = [array[high], array[mid]];

        return mid;
    };

    quickSortRecursive(array, 0, array.length - 1);
};

export default quickSortThreeTime;

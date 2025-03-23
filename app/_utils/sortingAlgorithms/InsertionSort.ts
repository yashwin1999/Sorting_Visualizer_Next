import bubbleSort from "@/app/_utils/sortingAlgorithms/BubbleSort";

interface step {
    indices: [number, number];
    type : string;
}

const insertionSort = (array: number[], steps: step[]) => {

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {

            steps.push({indices: [j + 1, j], type: 'swap'})
            array[j + 1] = array[j];

            j = j - 1;
        }
        array[j + 1] = key;
    }
}

export default insertionSort;
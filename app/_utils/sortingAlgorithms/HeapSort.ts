interface step {
    indices: [number, number];
    type : string;
}

const heapify = (array: number[], n: number, i: number, steps: step[] ) => {
    let largest = i;

    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && array[l] > array[largest]) {

        largest = l;
    }

    if (r < n && array[r] > array[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        steps.push({indices: [i,largest], type:'swap'})

        heapify(array, n, largest, steps);
    }
};

const heapSort= (array: number[], steps: step[])=> {

        let n = array.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(array, n, i, steps);
        }

        for (let i = n - 1; i > 0; i--) {
            let temp = array[0];
            array[0] = array[i];
            array[i] = temp;

            steps.push({indices: [0,i], type:'swap'})

            heapify(array, i, 0, steps);
        }
        return steps;
    }

export default heapSort;

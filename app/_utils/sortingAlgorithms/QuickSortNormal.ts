interface step {
    indices: [number, number];
    type : string;
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

const defaultCompare = (a: number, b: number) => {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};


const partition = (array: number[], left: number, right: number, compareFn: (a:number, b:number) => number, steps: step[]) => {
    const pivotIndex = Math.floor((right + left) / 2);
    const pivot = array[pivotIndex];

    let i = left;
    let j = right;

    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            steps.push({ indices: [i, j], type: 'swap' });
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            i++;
            j--;
        }
    }
    return i;
};

const quick = (array: number[], left: number, right: number, compareFn: (a:number, b:number) => number, steps: step[]) => {
    let index;

    if (left < right) {
        index = partition(array, left, right, compareFn, steps);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn, steps);
        }
        if (index < right) {
            quick(array, index, right, compareFn, steps);
        }
    }

    return array;
};


const quickSortNormal = (array: number[],steps: step[])=> {
    const compareFn: (a:number, b:number) => number  = defaultCompare;
    quick(array, 0, array.length - 1, compareFn, steps);
}


export default quickSortNormal;
interface step {
    indices: [number, number];
    type : string;
}


const mergeSort = (arr: number[], swaps: step[])=>  {
    mergeSortHelper(arr, 0, arr.length - 1, swaps);
}

const mergeSortHelper = (arr: number[], left: number, right: number, swaps: step[])=> {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(arr, left, mid, swaps);
    mergeSortHelper(arr, mid + 1, right, swaps);
    merge(arr, left, mid, right, swaps);
}

const merge = (arr: number[], left: number, mid: number, right: number, swaps: step[])=> {
    const leftPart = arr.slice(left, mid + 1);
    const rightPart = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftPart.length && j < rightPart.length) {
        if (leftPart[i] <= rightPart[j]) {
            arr[k] = leftPart[i];
            swaps.push({ indices: [k, leftPart[i]], type: "insert" });
            i++;
        } else {
            arr[k] = rightPart[j];
            swaps.push({ indices: [k, rightPart[j]], type: "insert" });
            j++;
        }
        k++;
    }
    while (i < leftPart.length) {
        arr[k] = leftPart[i];
        swaps.push({ indices: [k, leftPart[i]], type: "insert" });
        i++;
        k++;
    }

    while (j < rightPart.length) {
        arr[k] = rightPart[j];
        swaps.push({ indices: [k, rightPart[j]], type: "insert" });
        j++;
        k++;
    }
}

export default mergeSort;

const mergeSortTime = (arr: number[]) => {
    let array = arr.slice();

    const mergeSortRecursive = (array: number[]): number[] => {
        if (array.length < 2) return array;

        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);

        return merge(mergeSortRecursive(left), mergeSortRecursive(right));
    };

    const merge = (left: number[], right: number[]): number[] => {
        const sortedArray = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                sortedArray.push(left[i]);
                i++;
            } else {
                sortedArray.push(right[j]);
                j++;
            }
        }
        return sortedArray.concat(left.slice(i)).concat(right.slice(j));
    };
    return mergeSortRecursive(array);
};

export default mergeSortTime;

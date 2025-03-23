interface step {
    indices: [number, number];
    type : string;
}

const bubbleSort = (array: number[], steps: step[]) => {
    let swapped = false;
    do{
        swapped = false
        for (let i = 1; i < array.length; i++) {

            if (array[i - 1] > array[i]) {
                swapped = true;
                steps.push({indices: [i - 1, i], type:'swap'});
                let temp = array[i - 1];
                array[i - 1 ] = array[i];
                array[i] = temp;
            }
        }
    } while(swapped);
}

export default bubbleSort;
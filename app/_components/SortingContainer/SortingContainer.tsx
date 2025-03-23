"use client";

import {Component} from "react";
import BubbleSort from "@/app/_utils/sortingAlgorithms/BubbleSort";
import HeapSort from "@/app/_utils/sortingAlgorithms/HeapSort";
import InsertionSort from "@/app/_utils/sortingAlgorithms/InsertionSort";
import MergeSort from "@/app/_utils/sortingAlgorithms/MergeSort";
import QuickSortNormal from "@/app/_utils/sortingAlgorithms/QuickSortNormal";
import QuickSortThree from "@/app/_utils/sortingAlgorithms/QuickSortThree";
import SelectionSort from "@/app/_utils/sortingAlgorithms/SelectionSort";
import Bar from "@/app/_components/Bar/Bar";
import Dropdown from "@/app/_utils/dropdownBox";
import BubbleSortTime from "@/app/_utils/algorithms_Time/BubbleSortTime";
import HeapSortTime from "@/app/_utils/algorithms_Time/HeapSortTime";
import InsertionSortTime from "@/app/_utils/algorithms_Time/InsertionSortTime";
import MergeSortTime from "@/app/_utils/algorithms_Time/MergeSortTime";
import QuickSortNormalTime from "@/app/_utils/algorithms_Time/QuickSortNormalTime";
import QuickSortThreeTime from "@/app/_utils/algorithms_Time/QuickSortThreeTime";
import SelectionSortTime from "@/app/_utils/algorithms_Time/SelectionSortTime";


interface step {
    indices: [number, number];
    type : string;
}

interface sortingContainerState {
    array: number[];
    sortingTime: number;
    steps: step[];
    algo: number;
    isVisualizing: boolean;

}

interface sortingContainerProps {
    initialArray: number[];
    comparisons: number;
    barCount: number;
    handleChangeVisualizingState: (isVisualizing: string) => void;
}

const sleep= async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

export default class SortingContainer extends Component<sortingContainerProps> {

    constructor(props: sortingContainerProps) {
        super(props);
    }

    state: sortingContainerState = {
        array: [],
        sortingTime: 0,
        steps: [],
        algo: 0,
        isVisualizing: false
    };

    ALGORITHMS_TIME = [BubbleSortTime, HeapSortTime, InsertionSortTime, MergeSortTime, QuickSortNormalTime, QuickSortThreeTime, SelectionSortTime];
    ALGORITHM_TIME_OPTIONS = [
        {name: "Bubble Sort", value: 0},
        {name: "Heap Sort", value: 1},
        {name: "Insertion Sort", value: 2},
        {name: "Merge Sort", value: 3},
        {name: "Quick Sort Normal", value: 4},
        {name: "Quick Sort Three", value: 5},
        {name: "Selection Sort", value: 6},
    ];

    ALGORITHMS = [BubbleSort, HeapSort, InsertionSort, MergeSort, QuickSortNormal, QuickSortThree, SelectionSort];
    ALGORITHM_OPTIONS = [
        {name: "Bubble Sort", value: 0},
        {name: "Heap Sort", value: 1},
        {name: "Insertion Sort", value: 2},
        {name: "Merge Sort", value: 3},
        {name: "Quick Sort Normal", value: 4},
        {name: "Quick Sort Three", value: 5},
        {name: "Selection Sort", value: 6},
    ];

    generateSteps = () => {
        let array = this.state.array.slice();
        let steps: step[] = [];
        this.ALGORITHMS[this.state.algo](array, steps);
        this.setState({
            steps: steps,
        })
    };

    generateBars = (newArr: number[] = []) => {
        let barCount = this.props.barCount;
        let arr = this.props.initialArray;
        if (newArr.length > 0) {
            arr = newArr;
        }
        this.setState(
            {
                ...this.state,
                array: arr,
                barCount: barCount,
            },
            () => {
                this.generateSteps();
            }
        );
    };

    componentDidMount() {
        this.generateBars();
    }

    displaySteps = async (array: number[], steps: step[]) => {
        for (let step of steps) {
            const [i, j] = step.indices;
            let type = step.type;
            if (i >= this.state.array.length || !this.state.array[i]) return;
            if (type === "insert") {
                array[i] = j;
                this.setState({
                    array: array
                });
            } else if (type === "swap") {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                this.setState({
                    array: array
                });
            }
            await sleep(20);
        }
        this.setState({
            isVisualizing: false,
        });
    };

    changeAlgorithm = (algo: number) => {
        this.setState({
            algo: algo,
        }, () => {
            this.generateSteps();
        });
    }

    start = async () => {
        let array = this.state.array.slice();
        let array_Dup = this.state.array.slice();
        let sortingTime = this.state.sortingTime;
        let startTime = 0;
        let endTime = 0
        let steps: step[] = this.state.steps.slice();

        startTime = performance.now();
        this.ALGORITHMS_TIME[this.state.algo](array_Dup);
        endTime = performance.now();
        sortingTime = endTime - startTime;
        console.log("Sorting time: ",sortingTime);
        console.log("Algo: ", this.ALGORITHM_OPTIONS[this.state.algo]);

        this.setState({
            isVisualizing: true,
            sortingTime: sortingTime,
        }, () => {
            this.displaySteps(array, steps);
        });
    };


    render() {
        return (
            <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex justify-left scale-75 mb-4">
                    <Dropdown
                        options={this.ALGORITHM_OPTIONS}
                        selected={this.ALGORITHM_OPTIONS[0]}
                        type={"algorithm"}
                        handleSelect={this.changeAlgorithm}
                    />
                </div>
                <div className="flex justify-right scale-75 mb-4">
                    <label > Run Time: {this.state.sortingTime} ms</label>
                </div>
                <div
                    className="flex justify-center items-end p-4 bg-white rounded-lg shadow-md">
                    {this.state.array.map((height, pos) => (
                        <Bar
                            key={pos}
                            height={height}
                            width={Math.max(1, Math.floor(450 / this.props.barCount))}
                        />
                    ))}
                </div>
            </div>


        );
    }
}
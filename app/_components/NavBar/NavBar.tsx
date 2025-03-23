import React, {useState} from 'react';

interface navBarProps {
    generateRandom: () => void;
    handleStart: () => void;
    handleComparisonChange: (num: number) => void;
    handleNBarsChange: (num: number) => void;
}

export default function NavBar (props: navBarProps) {

    const [comparison, setComparison] = useState<number>(1);
    const [numElements, setNumElements] = useState<string>('10');

    const handleComparisonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = Number.isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value)
        v %= 10;
        if (v > 7) {
            v = 7;
        }
        if (v === 0) {
            v = 1;
        }
        setComparison(v);
        props.handleComparisonChange(v);
    };

    const handleNBarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumElements(e.target.value);

    };

    function isDigit(str: string) {
        const num = parseInt(str, 10);
        return !isNaN(num) && num.toString() === str;
    }

    const handleGenerateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        let v = numElements;
        if (v !== '' || isDigit(v)) {
            let intVal = Number.isNaN(parseInt(numElements)) ? 0 : parseInt(numElements)
            props.handleNBarsChange(intVal);
        }
    };

    return (
        <nav className="w-screen bg-blue-300 p-4 shadow-lg">
            <div className="flex items-center justify-start w-full gap-6">
                <div className="flex gap-4 items-center">
                    <label className="text-gray-700 font-medium">No. of Comparisons:</label>
                    <input
                        type="number"
                        name="comparison"
                        id="comparison"
                        className="w-24 px-3 py-1 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min={1}
                        value={comparison}
                        onChange={handleComparisonChange}
                    />

                    <label className="text-gray-700 font-medium">No. of Elements:</label>
                    <input
                        type="number"
                        name="nBars"
                        id="nBars"
                        className="w-24 px-3 py-1 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min={1}
                        value={numElements}
                        onChange={handleNBarsChange}
                    />
                </div>

                <button
                    className="bg-blue-500 text-white rounded-lg py-1 px-4 shadow-md hover:bg-blue-600 transition-all active:scale-95"
                    onClick={handleGenerateClick}
                >
                    Generate
                </button>

                <button
                    className="bg-green-500 text-white rounded-lg py-1 px-4 shadow-md hover:bg-green-600 transition-all active:scale-95"
                    onClick={() => {
                        props.handleStart()
                    }}
                >
                    Sort
                </button>
            </div>
        </nav>

    );
};
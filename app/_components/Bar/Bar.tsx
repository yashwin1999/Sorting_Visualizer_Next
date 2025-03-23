"use client";

interface barProps {
    height: number;
    width: number;
}

const colors = [
    '#40514e',
    '#2f89fc',
    '#30e3ca',
    '#ff304f',
    '#f99417',
    '#0D1282'];

export default function Bar(props: barProps) {

    const {height, width} = props;

    let barStyle = {
        height: height,
        marginTop: 500 - height,
        width: width
    };


    return (
        <div className="flex">
            <div
                className="bg-gradient-to-br from-blue-600 to-blue-950 rounded-sm shadow-xl transform hover:scale-105 transition-transform"
                style={barStyle}
            ></div>
            {/*<div*/}
            {/*    className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-sm shadow-xl transform hover:scale-105 transition-transform"*/}
            {/*    style={barStyle}*/}
            {/*></div>*/}
        </div>

    );
};
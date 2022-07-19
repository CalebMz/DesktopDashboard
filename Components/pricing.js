import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

/** 
 * This component has the bar graph for the price of each streaming service
 * which allows users to compare prices directly.
*/

function BarChart() {
    const data={
        labels: ['Price in Rands'],
        datasets: [
            {
                label: 'Netflix',
                data: [158],
                borderColor: ['rgba(225, 0, 0, 1)'],
                backgroundColor: ['rgba(225, 0, 0, 1)'],
            },
            {
                label: "HBO Max",
                data: [220],
                borderColor: ['rgba(128, 0, 128, 1)'],
                backgroundColor: ['rgba(128, 0, 128, 1)'],
            },
            {
                label: "Amazon",
                data: [82],
                borderColor: ['rgba(128, 128, 128, 1)'],
                backgroundColor: ['rgba(128, 128, 128, 1)'],
            },
            {
                label: "Disney+",
                data: [119],
                borderColor: ['rgba(0, 255, 255, 1)'],
                backgroundColor: ['rgba(0, 255, 255, 1)'],
            }
        ]
    }
    return <Bar data={data}/>
}

export default BarChart;
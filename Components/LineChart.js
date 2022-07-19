import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, {useRef} from 'react';
import { Line } from 'react-chartjs-2';

/**
 * This component houses the line chart that displays the popularity trend for each streaming service
 * The data was taken from google trends and stored in our MySQL database
 */

function LineChart() {
    const data={
        labels: ['Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'Netflix',
                data: [66, 69, 67, 64],
                borderColor: ['rgba(225, 0, 0, 1)'],
                backgroundColor: ['rgba(225, 0, 0, 1)'],
                pointBackgroundColor: 'rgba(225, 0, 0, 1)',
                pointBoarderColor: 'rgba(225, 0, 0, 1)'

            },
            {
                label: "HBO Max",
                data: [42, 44, 52, 45],
                borderColor: ['rgba(128, 0, 128, 1)'],
                backgroundColor: ['rgba(128, 0, 128, 1)'],
                pointBackgroundColor: 'rgba(128, 0, 128, 1)',
                pointBoarderColor: 'rgba(128, 0, 128, 1)'
            },
            {
                label: "Amazon",
                data: [13, 13, 13, 12],
                borderColor: ['rgba(128, 128, 128, 1)'],
                backgroundColor: ['rgba(128, 128, 128, 1)'],
                pointBackgroundColor: 'rgba(128, 128, 128, 1)',
                pointBoarderColor: 'rgba(128, 128, 128, 1)'
            },
            {
                label: "Disney+",
                data: [57, 46, 48, 75],
                borderColor: ['rgba(0, 255, 255, 1)'],
                backgroundColor: ['rgba(0, 255, 255, 1)'],
                pointBackgroundColor: 'rgba(0, 255, 255, 1)',
                pointBoarderColor: 'rgba(0, 255, 255, 1)'
            }
        ]
    }
    return <Line data={data}/>
}

export default LineChart;
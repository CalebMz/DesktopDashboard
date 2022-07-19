import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import amazon from '../amazon.json';

/**
 * This component contains the content bar graph which displays the ratio of movies to series
 * for each streaming service, this data was taken from a Kaggle csv file and stored in our MySQL
 * database
 */


function Content() {
    
    const data={
        labels: ['Movies', 'Series'],
        datasets: [
            {
                label: 'Netflix',
                data: [70, 30],
                borderColor: ['rgba(225, 0, 0, 1)'],
                backgroundColor: ['rgba(225, 0, 0, 1)'],

            },
            {
                label: "HBO Max",
                data: [82, 18],
                borderColor: ['rgba(128, 0, 128, 1)'],
                backgroundColor: ['rgba(128, 0, 128, 1)'],
            },
            {
                label: "Amazon",
                data: [81, 19],
                borderColor: ['rgba(128, 128, 128, 1)'],
                backgroundColor: ['rgba(128, 128, 128, 1)'],
            },
            {
                label: "Disney+",
                data: [72, 28],
                borderColor: ['rgba(0, 255, 255, 1)'],
                backgroundColor: ['rgba(0, 255, 255, 1)'],
            },
        ]
    }
    return <Bar data={data}/>
}

export default Content;
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Bar } from 'react-chartjs-2';

/**
 * Component stores the bar graph that displays four top exclusives on Netflix
 * The data was taken from the streaming service itself
 */

function TopExclusivesNetflix() {
    const data={
        labels: ["Bridgerton", "Money Heist", "Stranger Things", "The Witcher"],
        datasets: [
            {
                label: ['Netflix'],
                data: [7.3, 8.2, 8.7, 8.2],
                borderColor: ['rgba(225, 0, 0, 1)'],
                backgroundColor: ['rgba(225, 0, 0, 1)'],

            },
        ]
    }

    const options = {
        indexAxis: 'y',
    }
    return <Bar data={data} options={options}/>
}

export default TopExclusivesNetflix;
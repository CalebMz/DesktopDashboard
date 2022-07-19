import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Bar } from 'react-chartjs-2';

/**
 * Component stores the bar graph that displays four top exclusives on Amazon
 * The data was taken from the streaming service itself
 */

function TopExclusivesAmazon() {
    const data={
        labels: ["The Boys", "Bosch", "Grand Tour", "Invincible"],
        datasets: [
            {
                label: ['Amazon'],
                data: [8.8, 8.4, 8.7, 8.7],
                borderColor: ['rgba(128, 128, 128, 1)'],
                backgroundColor: ['rgba(128, 128, 128, 1)'],

            },
        ]
    }

    const options = {
        indexAxis: 'y',
    }
    return <Bar data={data} options={options}/>
}

export default TopExclusivesAmazon;
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Bar } from 'react-chartjs-2';

/**
 * Component stores the bar graph that displays four top exclusives on Disney+
 * The data was taken from the streaming service itself
 */

function TopExclusivesDisney() {
    const data={
        labels: ["Mandalorian", "Loki", "WandaVision", "Bad Batch"],
        datasets: [
            {
                label: ['Disney'],
                data: [8.8, 8.6, 8.0, 8.3],
                borderColor: ['rgba(0, 255, 255, 1)'],
                backgroundColor: ['rgba(0, 255, 255, 1)'],

            },
        ]
    }

    const options = {
        indexAxis: 'y',
    }
    return <Bar data={data} options={options}/>
}

export default TopExclusivesDisney;
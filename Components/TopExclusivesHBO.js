import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Bar } from 'react-chartjs-2';

/**
 * Component stores the bar graph that displays four top exclusives on HBO Max
 * The data was taken from the streaming service itself
 */

function TopExclusivesHBO() {
    const data={
        labels: ["Succession", "GOT", "Doctor Who", "Titans"],
        datasets: [
            {
                label: ['HBO'],
                data: [8.7, 9.2, 8.6, 7.6],
                borderColor: ['rgba(128, 0, 128, 1)'],
                backgroundColor: ['rgba(128, 0, 128, 1)'],

            },
        ]
    }

    const options = {
        indexAxis: 'y',
    }
    return <Bar data={data} options={options}/>
}

export default TopExclusivesHBO;
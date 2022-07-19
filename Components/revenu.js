import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

/**
 * Doughnut to represent the revenue made by each site in the last year
 * This allows users to track how well their favorite site has been doing
 * Which we included to help extend the longevity of the dashboard
 */

function Revenue() {
    const data={
        labels: ['Netflix', 'HBO Max', 'Amazon', 'Disney+'],
        datasets: [
            {
                label: 'Revenue for 2020 (B)',
                data: [24.9, 2.0, 25.21, 1.0,],
                backgroundColor: [
                    'rgba(225, 0, 0, 1)',
                    'rgba(128, 0, 128, 1)',
                    'rgba(128, 128, 128, 1)',
                    'rgba(0, 255, 255, 1)'
                ],
            },
        ]
    }
    return <Doughnut data={data}/>
}

export default Revenue;
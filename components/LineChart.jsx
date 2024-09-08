
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const lineData = {
        labels: data?.labels || [],
        datasets: [
            {
                label: 'Sales Over Time',
                data: data?.values || [],
                fill: false,
                borderColor: '#36A2EB',
            },
        ],
    };

    return (
        <div className="bg-blue-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Sales Over Time</h3>
            <Line data={lineData} />
        </div>
    );
};

export default LineChart;

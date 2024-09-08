import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
    const doughnutData = {
        labels: data?.labels || [],
        datasets: [
            {
                label: 'Conversion Rate',
                data: data?.values || [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <div className="bg-blue-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Conversion Rate</h3>
            <Doughnut data={doughnutData} />

        </div>
    )
}

export default DoughnutChart


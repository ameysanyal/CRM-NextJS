import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {

    const barData = {
        labels: data?.labels || [],
        datasets: [
            {
                label: 'Marketing Performance',
                data: data?.values || [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    }

    return (

        <div className="bg-blue-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Marketing Performance</h3>
            <Bar data={barData} />
        </div>
    )
}

export default BarChart


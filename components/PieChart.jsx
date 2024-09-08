// components/PieChart.js
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const PieChart = ({ data }) => {
    const pieData = {
        labels: data?.labels || [],
        datasets: [
            {
                label: 'Lead Status',
                data: data?.values || [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    function handleHover(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
        });
        legend.chart.update();
    }

    function handleLeave(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = color.length === 9 ? color.slice(0, -2) : color;
        });
        legend.chart.update();
    }

    const options = {
        plugins: {
            legend: {
                onHover: handleHover,
                onLeave: handleLeave
            }
        }
    }

    return (
        <div className="bg-blue-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Lead Status</h3>
            <Pie data={pieData} options={options} />
        </div>
    );
};

export default PieChart;


'use client'
import { Doughnut, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

const LeadsOverview = () => {
  const colors = ['#2596be', '#0c347c', '#04bcf2']

  const pieData = {
    labels: ['Email', 'Social Media', 'WhatsApp'],
    datasets: [
      {
        data: [12, 18, 70],
        backgroundColor: colors,
        borderWidth: 0,
        offset: 8
      }
    ]
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '0%',
    plugins: { legend: { display: false } }
  }

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Email',
        data: [1000, 1200, 1500, 1700, 3400],
        borderColor: colors[0],
        backgroundColor: colors[0],
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: colors[0],
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Social Media',
        data: [600, 1800, 800, 2600, 1500],
        borderColor: colors[1],
        backgroundColor: colors[1],
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: colors[1],
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'WhatsApp',
        data: [2700, 1100, 300, 1300, 2600],
        borderColor: colors[2],
        backgroundColor: colors[2],
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: colors[2],
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  }

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'bottom' as const },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        min: 0,
        max: 4000,
        ticks: {
          stepSize: 1000,
          callback: (value: number | string) => value
        },
        grid: { color: 'hsl(var(--border))' }
      }
    }
  }

  return (
    <div className="bg-white shadow-md m-4 border border-gray-300 w-full max-w-[710px] overflow-hidden">
      <div className="p-2 bg-gray-200 flex justify-between items-center border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Leads Overview</h2>
        <div className="flex gap-2">
          <button className="border px-2 border-gray-400 rounded">Channels</button>
          <button className="border px-2 border-gray-400 rounded">Investment type</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-4 h-[350px] gap-4">
        {/* Pie Chart */}
        <div className="flex flex-col items-center w-full sm:w-1/2 h-full">
          <div className="text-sm font-medium text-gray-800 mb-2">Channels</div>
          <div className="flex-1 w-full">
            <Doughnut data={pieData} options={pieOptions} />
          </div>
          <div className="flex gap-3 flex-wrap justify-center mt-2">
            {pieData.labels.map((label, idx) => (
              <div key={idx} className="flex items-center gap-1 text-xs text-gray-700">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ backgroundColor: colors[idx] }}
                ></span>
                {label} ({pieData.datasets[0].data[idx]})
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div className="flex flex-col w-full sm:w-1/2 h-full">
          <div className="text-lg font-medium text-gray-800 mb-2 text-center">Prospect Comparison</div>
          <div className="bg-blue-300 p-2 text-center mb-2">
            <div className="text-2xl font-bold mb-3">6,000</div>
          </div>
          <div className="flex-1">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadsOverview

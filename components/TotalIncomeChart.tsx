'use client'

export function TotalIncomeChart() {
  const chartData = [
    { month: 'Jan', profit: 4500, loss: 1200 },
    { month: 'Feb', profit: 5200, loss: 1800 },
    { month: 'Mar', profit: 4800, loss: 900 },
    { month: 'Apr', profit: 6100, loss: 2100 },
    { month: 'May', profit: 5500, loss: 1600 },
    { month: 'Jun', profit: 7200, loss: 2400 },
  ]

  const maxValue = Math.max(...chartData.flatMap(d => [d.profit, d.loss]))

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Total Income</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg">Monthly</button>
          <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Yearly</button>
        </div>
      </div>

      {/* Simple Bar Chart */}
      <div className="space-y-4">
        {/* Legend */}
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Profit</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-gray-600">Loss</span>
          </div>
        </div>

        {/* Chart Bars */}
        <div className="flex items-end justify-between h-48 px-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex items-end space-x-1 w-full">
                {/* Profit Bar */}
                <div 
                  className="bg-blue-500 rounded-t flex-1 min-h-[2px]"
                  style={{ height: `${(data.profit / maxValue) * 100}%` }}
                />
                {/* Loss Bar */}
                <div 
                  className="bg-red-500 rounded-t flex-1 min-h-[2px]"
                  style={{ height: `${(data.loss / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

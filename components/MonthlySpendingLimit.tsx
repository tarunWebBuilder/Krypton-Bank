'use client'

export function MonthlySpendingLimit() {
  const spent = 2456.78
  const limit = 5000
  const percentage = (spent / limit) * 100

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Monthly Spending Limit</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Amounts */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Spent</p>
            <p className="text-xl font-bold text-gray-900">${spent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Limit</p>
            <p className="text-xl font-bold text-gray-900">${limit.toLocaleString()}</p>
          </div>
        </div>

        {/* Remaining */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600">Remaining</span>
            <span className="font-semibold text-blue-600">
              ${(limit - spent).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

export function RecentActivities() {
  const activities = [
    {
      id: '#3210',
      activity: 'Payment to Sarah Johnson',
      price: -1250.00,
      status: 'completed',
      date: '2024-01-15',
      type: 'payment'
    },
    {
      id: '#3209',
      activity: 'Salary Deposit',
      price: 4500.00,
      status: 'completed',
      date: '2024-01-14',
      type: 'deposit'
    },
    {
      id: '#3208',
      activity: 'Online Purchase - Amazon',
      price: -89.99,
      status: 'completed',
      date: '2024-01-13',
      type: 'purchase'
    },
    {
      id: '#3207',
      activity: 'Transfer from John Doe',
      price: 750.00,
      status: 'pending',
      date: '2024-01-12',
      type: 'transfer'
    },
    {
      id: '#3206',
      activity: 'Restaurant Bill',
      price: -156.50,
      status: 'completed',
      date: '2024-01-11',
      type: 'payment'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'failed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return '💳'
      case 'deposit':
        return '💰'
      case 'purchase':
        return '🛒'
      case 'transfer':
        return '🔄'
      default:
        return '📄'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 001 1h2a1 1 0 001-1v-2.586a1 1 0 00-.293-.707l-6.414-6.414A1 1 0 006.586 4H4z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 001 1h2a1 1 0 001-1v-2.586a1 1 0 00-.293-.707l-6.414-6.414A1 1 0 006.586 4H4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-sm text-gray-900 font-medium">{activity.id}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getActivityIcon(activity.type)}</span>
                    <span className="text-sm text-gray-900">{activity.activity}</span>
                  </div>
                </td>
                <td className={`py-4 px-4 text-sm font-medium text-right ${
                  activity.price > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.price > 0 ? '+' : ''}${Math.abs(activity.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Link */}
      <div className="mt-4 text-center">
        <button className="text-blue-600 font-medium text-sm hover:text-blue-700">
          View All Activities →
        </button>
      </div>
    </div>
  )
}

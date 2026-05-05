'use client'

export function WalletsSection() {
  const wallets = [
    { currency: 'USD', balance: 45231.00, change: '+2.3%', status: 'active' },
    { currency: 'EUR', balance: 12345.67, change: '-1.2%', status: 'active' },
    { currency: 'GBP', balance: 8921.34, change: '+0.8%', status: 'inactive' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">My Wallets</h3>
      
      <div className="space-y-3">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                wallet.currency === 'USD' ? 'bg-green-100 text-green-600' :
                wallet.currency === 'EUR' ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {wallet.currency}
              </div>
              <div>
                <p className="font-medium text-gray-900">${wallet.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p className={`text-xs ${wallet.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {wallet.change}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${
                wallet.status === 'active' ? 'bg-green-500' : 'bg-gray-300'
              }`}></span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
        + Add New Wallet
      </button>
    </div>
  )
}

'use client'

import { useAccount } from 'wagmi'

// Mock data structure as per PRD
const collateralData = {
  btcDeposited: 0.5,
  btcPrice: 65000,
  ltv: 0.5,
  borrowed: 0,
}

// Derived values
const collateralUSD = collateralData.btcDeposited * collateralData.btcPrice
const borrowLimit = collateralUSD * collateralData.ltv
const healthFactor = collateralData.borrowed > 0 ? (collateralUSD / collateralData.borrowed) * 0.5 : 100

export function CollateralDashboard() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-500 dark:text-gray-400">
          Connect wallet to view dashboard
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Total Collateral */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Total Collateral
        </h2>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-gray-900 dark:text-white font-mono">
            {collateralData.btcDeposited} BTC
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-400 font-mono">
            ${collateralUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      {/* Borrowing Power */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Borrowing Power
        </h2>
        <div className="space-y-2">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            You can borrow up to
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono">
            {borrowLimit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} MUSD
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            LTV: {(collateralData.ltv * 100).toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Current Loan */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Current Loan
        </h2>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
            {collateralData.borrowed.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} MUSD
          </div>
        </div>
      </div>

      {/* Health Factor / Risk Meter */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Health Factor
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Risk Level
            </span>
            <span className={`text-sm font-bold ${
              healthFactor > 50 ? 'text-green-600 dark:text-green-400' :
              healthFactor > 25 ? 'text-yellow-600 dark:text-yellow-400' :
              'text-red-600 dark:text-red-400'
            }`}>
              {healthFactor > 50 ? 'Safe' : healthFactor > 25 ? 'Moderate' : 'Risky'}
            </span>
          </div>
          
          {/* Visual Risk Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${
                healthFactor > 50 ? 'bg-green-500' :
                healthFactor > 25 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${Math.min(healthFactor, 100)}%` }}
            />
          </div>
          
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {healthFactor.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
            Deposit BTC
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
            Borrow MUSD
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
            Repay Loan
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useAccount } from 'wagmi'

// Mock data as per PRD
const mockBTCBalance = 0.84
const mockBTCPrice = 65000
const mockUSDValue = mockBTCBalance * mockBTCPrice

export function BTCBalanceCard() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-500 dark:text-gray-400">
          Connect wallet to view balance
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="space-y-4">
        <div>
          <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            Bitcoin Balance
          </h2>
        </div>
        
        <div className="space-y-2">
          <div className="text-4xl font-bold text-gray-900 dark:text-white font-mono">
            {mockBTCBalance.toFixed(4)} BTC
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-400 font-mono">
            ${mockUSDValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Price per BTC</span>
            <span className="text-gray-900 dark:text-white font-mono">
              ${mockBTCPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

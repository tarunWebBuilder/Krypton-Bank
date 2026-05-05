'use client'

import { Navbar } from '@/components/Navbar'
import { BTCBalanceCard } from '@/components/BTCBalanceCard'
import { CollateralDashboard } from '@/components/CollateralDashboard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Krypton Bank
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Decentralized lending platform with Bitcoin collateral
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Balance Card - Takes 1 column on large screens */}
            <div className="lg:col-span-1">
              <BTCBalanceCard />
            </div>

            {/* Collateral Dashboard - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <CollateralDashboard />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

'use client'

export function MyCards() {
  const cards = [
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      balance: 5234.56,
      color: 'from-blue-600 to-blue-800',
      status: 'active'
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8888',
      balance: 1234.00,
      color: 'from-purple-600 to-purple-800',
      status: 'active'
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">My Cards</h3>
        <button className="text-blue-600 font-medium text-sm hover:text-blue-700">
          Add New
        </button>
      </div>

      <div className="space-y-3">
        {cards.map((card) => (
          <div key={card.id} className="relative">
            {/* Card Design */}
            <div className={`bg-gradient-to-br ${card.color} rounded-xl p-4 text-white relative overflow-hidden h-32`}>
              {/* Card Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16" />
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs opacity-80">Current Balance</p>
                    <p className="text-lg font-bold">${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="text-xs font-medium opacity-80">
                    {card.type}
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-80">•••• •••• •••• {card.last4}</p>
                  </div>
                  <div className="text-xs opacity-80">
                    {card.status === 'active' ? 'Active' : 'Inactive'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

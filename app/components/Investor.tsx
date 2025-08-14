'use client'

const Investor = () => {
  const stats = [
    { label: '3000', sublabel: 'Total Investors', color: 'text-card-foreground' },
    { label: '1237', sublabel: 'Active', color: 'text-card-foreground' },
    { label: '1763', sublabel: 'Dormant', color: 'text-card-foreground' }
  ]

  const SIP = [
    { label: 'Due', value: '267', days: 'in last 7 days' },
    { label: 'Cancelled', value: '394', days: 'in last 10 days' },
    { label: 'Expired', value: '30', days: 'in last 15 days' },
    { label: 'CEASED', value: '20', days: 'in last 20 days' }
  ]

  const LUMPSUM = [
    { label: 'FUNDS ROLLED OVER', value: '12', days: 'in last 7 days' },
    { label: 'FUNDS ROLLING OVER', value: '8', days: 'in last 15 days' }
  ]

  return (
    <div className='bg-white w-[690px] border-2 border-gray-300 h-[395px] shadow mt-4'>
      <div className='space-y-6'>
        <div className='grid grid-cols-3 bg-gray-200 gap-2 text-center'>
          {stats.map((stat, index) => (
            <div key={index} className='p-2 border-r border-gray-300'>
              <div className={`text-lg font-bold ${stat.color}`}>
                {stat.label}
              </div>
              <div className='text-xs text-muted-foreground'>
                {stat.sublabel}
              </div>
            </div>
            
          ))}
        </div>

        {/* SIP Table */}
        <div className="px-20 py-5">
            <div className="mb-10">
          <h3 className='text-sm font-semibold text-card-foreground mb-2  pb-1'>
            SIP
          </h3>
          <div className='flex'>
            <div className='grid grid-cols-2 gap-5 ml-'>
              {SIP.map((item, index) => (
                <div
                  key={index}
                  className='flex gap-3 justify-between items-center text-xs  mr-31'
                >
                  <div className='font-semibold text-card-foreground w-10 h-10 text-md text-center p-2 border text-blue-700  border-blue-700'>
                    {item.value}
                  </div>
                  <div className='flex-1'>
                    {item.label}
                    {item.days && (
                      <div className='text-muted-foreground'>{item.days}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LUMPSUM Table */}
        <div>
          <h3 className='text-sm font-semibold text-card-foreground mb-2  pb-1'>
           Lumpsum
          </h3>
          <div className='flex'>
            <div className='grid grid-cols-2 gap-5 '>
              {LUMPSUM.map((item, index) => (
                <div
                  key={index}
                  className='flex gap-3 justify-between items-center text-xs  mr-20'
                >
                  <div className='font-semibold text-card-foreground w-10 h-10 text-md text-center p-2 border text-blue-700  border-blue-700'>
                    {item.value}
                  </div>
                  <div className='flex-1'>
                    {item.label}
                    {item.days && (
                      <div className='text-muted-foreground'>{item.days}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Investor

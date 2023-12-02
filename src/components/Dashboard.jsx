import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransationChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'


export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-1'>
      <DashboardStatsGrid/>


      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <BuyerProfileChart/>
      </div>

      <div className='flex flex-row gap-4 w-full'>
        <RecentOrders/>
        <PopularProducts/>
      </div>
      
      
    </div>
  )
}

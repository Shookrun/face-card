import React from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from '../date-range-picker'
import DashBoardStatsCards from '../dashboard-stats-cards';
import Dashboard from '../recharts';

const DashboardPanel = () => {
 
  return (
    <div className='container mx-auto flex flex-col gap-4  py-2 px-40 '>
        <DateRangePicker/>
        <DashBoardStatsCards/>

     
      <Dashboard/>
    </div>
  )
}

export default DashboardPanel
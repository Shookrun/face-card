import React from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from '../date-range-picker'

const DashboardPanel = () => {
  return (
    <div className='container mx-auto  py-2 px-40 flex items-center justify-between'>
        <h2 className='text-4xl font-bold'>Dashboard</h2>
        <DateRangePicker/>
        {/* <input type="date"  />
        <input type="date" /> */}
    </div>
  )
}

export default DashboardPanel
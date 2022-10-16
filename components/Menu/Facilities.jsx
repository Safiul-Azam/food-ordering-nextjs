import { FaPizzaSlice } from 'react-icons/fa';
import { GiAlarmClock } from 'react-icons/gi';

import { MdOutlineDeliveryDining } from "react-icons/md";
function Facilities() {
  return (
    <div className='flex justify-between container mx-auto space-x-6 pb-20'>
      <div className='w-full flex items-center space-x-6 border-dashed border-2 rounded-xl p-5 hover:border-secondary'>
        <MdOutlineDeliveryDining className='text-6xl text-secondary '/>
        <div className='w-3/4 space-y-2'>
          <h2 className='text-xl font-bold text-black'>Free shipping</h2>
          <p className='text-[#666] text-sm w-3/4'>Sign up for updates and get free shipping</p>
        </div>
      </div>
      <div className='w-full flex items-center space-x-6 border-dashed border-2 rounded-xl p-5 hover:border-secondary'>
        <GiAlarmClock className='text-6xl text-secondary '/>
        <div className='w-3/4 space-y-2'>
          <h2 className='text-xl font-bold text-black'>30 Minutes Delivery</h2>
          <p className='text-[#666] text-sm'>Everything you order will quickly delivered to your door.</p>
        </div>
      </div>
      <div className='w-full flex items-center space-x-6 border-dashed border-2 rounded-xl p-5 hover:border-secondary'>
        <FaPizzaSlice className='text-6xl text-secondary '/>
        <div className='w-3/4 space-y-2'>
          <h2 className='text-lg font-bold text-black'>Best Quality Guarantee</h2>
          <p className='text-[#666] text-sm'>Poco is an international chain of family restaurants.</p>
        </div>
      </div>
    </div>
  );
}

export default Facilities;

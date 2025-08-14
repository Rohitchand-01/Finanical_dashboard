import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Investor from '../components/Investors';

// A simple loading component to show while the Investor component loads
const LoadingInvestors = () => {
  return <div className='p-4'>Loading investors...</div>;
};

const Page = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='flex flex-row'>
        <div className='w-[50px] mr-2 bg-white'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Suspense fallback={<LoadingInvestors />}>
            <Investor />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
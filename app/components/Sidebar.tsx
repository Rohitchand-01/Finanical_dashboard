import React from 'react'
import { Monitor } from 'lucide-react';
import { ArrowDownUp } from 'lucide-react';
import { User } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { Menu } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import { Users } from 'lucide-react';
import { Calculator } from 'lucide-react';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='w-12 h-full border border-gray-300 '>
      <div className='p-4  w-12 flex border-b h-15 border-blue-700'><Monitor /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><ArrowDownUp /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><User /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><ChartNoAxesCombined /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><Menu /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><PersonStanding /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><Users /></div>
      <div className='p-4 border-gray-300 w-12 flex border h-15'><Calculator /></div>
      <div className='px-2 py-4 border-gray-300 w-12 flex border h-15 text-sm'>www.</div>
    </div>
  )
}

export default Sidebar
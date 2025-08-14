'use client'
import { ChevronRight } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

interface TodoItem {
  id: number
  type: string
  message: string
  reminded: boolean
}

const TodosSection = () => {
  const [todos] = useState<TodoItem[]>([
    {
      id: 1,
      type: 'Birthday Alerts',
      message:
        "Ramnesh Shetkar's birthday is tomorrow 23/11/2016. Don't Forget to Wish.",
      reminded: false
    },
    {
      id: 2,
      type: 'Birthday Alerts',
      message:
        "Dinesh Kumar's birthday is tomorrow 23/11/2016. Don't Forget to Wish.",
      reminded: false
    },
    {
      id: 3,
      type: 'Birthday Alerts',
      message:
        "Mahesh Bhadana's birthday is tomorrow 23/11/2016. Don't Forget to Wish.",
      reminded: false
    },
    {
      id: 4,
      type: 'Pending Transaction',
      message: "Tisha Saini has a pending Switch Transaction",
      reminded: false
    },
    {
      id: 5,
      type: 'Pending Transaction',
      message: 'S.K. Patel has a pending Redemption Transaction',
      reminded: false
    }
  ])

  const handleWish = (id: number) => {
    toast.success('Wish sent successfully!')
  }

  const handleRemind = (id: number) => {
    toast.success('Reminder sent successfully!')
  }

  // Separate the todos by type
  const birthdayTodos = todos.filter(todo => todo.type === 'Birthday Alerts')
  const pendingTodos = todos.filter(todo => todo.type === 'Pending Transaction')

  return (
    <div className='bg-white shadow-md  w-[800px] border border-gray-300 m-2'>
      {/* Header */}
      <div className='flex items-center justify-between p-3 border-b border-gray-300 bg-gray-100'>
        <div className='flex items-center space-x-2'>
          <span className='text-lg font-semibold text-[#0b387c]'>To-Do's</span>
          <span className='bg-red-500 text-white text-xs font-bold px-2 py-1.5 rounded-full'>
            {todos.length}
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <button className='text-[#0b387c] text-lg hover:underline'>
            View All
          </button>
          <ChevronRight className='text-[#0b387c]' />
        </div>
      </div>

      {/* Birthday Alerts Section */}
      <div className='p-2 divide-y divide-gray-200'>
        <div className='flex justify-between items-center p-2'>
          <p className='text-blue-600 font-bold'>Birthday Alerts</p>
          <button className='text-[#0b387c] border border-[#0b387c] rounded-md px-2 py-1 text-sm'>
            Wish All
          </button>
        </div>
        {birthdayTodos.map(todo => (
          <div key={todo.id} className='py-4 flex justify-between items-start'>
            <div className='flex-1'>
              <div className='text-sm text-gray-700'>{todo.message}</div>
            </div>
            <div className='flex space-x-2 ml-4'>
              <button
                className='text-[#0b387c] text-xs px-3 py-1 rounded '
                onClick={() => handleWish(todo.id)}
              >
                Wish Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='p-2 divide-y divide-gray-200'>
        <div className='flex justify-between items-center p-2'>
          <p className='text-blue-600 font-bold'>Pending Transaction</p>
          <button className='text-[#0b387c] border border-[#0b387c] rounded-md px-2 py-1 text-sm'>
            Remind All
          </button>
        </div>
        {pendingTodos.map(todo => (
          <div key={todo.id} className='py-4 flex justify-between items-start'>
            <div className='flex-1'>
              <div className='text-sm text-gray-700'>{todo.message}</div>
            </div>
            <div className='flex space-x-2 ml-4'>
              <button
                className='text-[#0b387c] text-xs px-3 py-1 rounded '
                onClick={() => handleRemind(todo.id)}
              >
                Remind
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodosSection

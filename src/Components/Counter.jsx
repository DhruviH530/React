import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/CounterSlice';

 const Counter = () => {

const count = useSelector((state) => state.counter.value); 
const dispatch = useDispatch();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-600'>
        <button
            className='border-4 rounded-sm py-1 px-2 bg-blue-400 text-black'
            onClick={() => dispatch(increment()) }
        >
            Increment
        </button>

        <br/>
{/* value kadhva mate counter  ma je value define kri che ae lava va magte line 5 */}
        <div>
             {count}
        </div>

        <br/>

        <button
        className='border-4 rounded-sm py-2 px-1 bg-blue-400 text-black'
              onClick={() => dispatch(decrement()) }
        >
            Decrement
        </button>
    </div>
  )
}

export default Counter
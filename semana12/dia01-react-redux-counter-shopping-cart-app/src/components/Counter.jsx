import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, incrementBy } from '../store/counter'

export const Counter = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="border rounded-lg p-2 flex flex-col items-center gap-2">
      <h3 className="font-bold">Counter with Redux</h3>

      <div className="flex items-center gap-2">
        <button
          className="bg-green-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => dispatch(incrementBy(3))}
        >+3</button>
        <button
          className="bg-blue-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => dispatch(increment())}
        >+1</button>
        <h1 className="bg-slate-200 p-2 min-w-14 rounded-lg font-bold text-center">
          {counter}
        </h1>
        <button
          className="bg-blue-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => dispatch(decrement())}
        >-1</button>
        <button
          className="bg-green-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => dispatch(incrementBy(-3))}
        >-3</button>
      </div>
    </div>
  )
}

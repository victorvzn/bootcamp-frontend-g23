import { useCounterStore } from '../store/counter'

export const Counter = () => {
  const { count, increment, decrement, incrementByValue } = useCounterStore()

  return (
    <div className="border rounded-lg p-2 flex flex-col items-center gap-2">
      <h3 className="font-bold">Counter with Zustand</h3>

      <div className="flex items-center gap-2">
        <button
          className="bg-amber-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => incrementByValue(5)}
        >+5</button>
        <button
          className="bg-blue-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={increment}
        >+1</button>
        <h1 className="bg-slate-200 p-2 min-w-14 rounded-lg font-bold text-center">
          {count}
        </h1>
        <button
          className="bg-blue-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={decrement}
        >-1</button>
        <button
          className="bg-amber-400 p-2 min-w-14 rounded-lg font-bold cursor-pointer"
          onClick={() => incrementByValue(-5)}
        >-5</button>
      </div>
    </div>
  )
}

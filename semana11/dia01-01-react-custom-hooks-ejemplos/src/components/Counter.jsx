// DESPUÉS DE USAR CUSTOM HOOKS

import { useCounter } from "../hooks/useCounter"

const Counter = () => {
  const [count, decrement, increment] = useCounter(10)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid gray' }}>
      <h3>Counter 1</h3>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={decrement}>-</button>
        <strong>{count}</strong>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

// ANTES DE USAR CUSTOM HOOKS

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid gray' }}>
//       <h3>Counter 1</h3>

//       <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <strong>{count}</strong>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

export default Counter
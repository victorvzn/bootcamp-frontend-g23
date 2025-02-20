import { useState } from "react"

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount)

  const decrement = () => setCount(count - 1)

  const increment = () => setCount(count + 1)

  return [
    count,
    decrement,
    increment
  ]
}
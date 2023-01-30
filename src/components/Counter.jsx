import { useEffect, useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count changed: ", count)
  }, [count])

  return <button onClick={() => setCount(count + 1)}>count: {count}</button>
}

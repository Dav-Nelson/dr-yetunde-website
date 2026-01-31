import { useState } from 'react'
import './App.css'          // or './index.css' if you moved styles there
import './index.css'        // ← make sure this is imported if styles are in index.css

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-green-600 text-white p-10 text-3xl font-bold text-center">
      Tailwind is working! Hello Dr. Yetunde's site 🚀
      <p>Count: {count}</p>
      <button 
        className="mt-4 px-6 py-3 bg-white text-green-600 rounded hover:bg-gray-100"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  )
}

export default App
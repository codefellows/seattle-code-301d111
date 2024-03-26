import { useState } from 'react'

import Bank from './components/Bank.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Bank />
  )
}

export default App



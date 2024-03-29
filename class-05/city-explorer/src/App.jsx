import { useState } from 'react'

import Header from './components/Header.jsx';
import Explorer from './components/Explorer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header title="City Explorer 1.0" />
     <Explorer />
    </>
  )
}

export default App

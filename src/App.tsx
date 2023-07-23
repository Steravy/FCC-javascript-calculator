import { useState } from 'react';
import CalculatorFrame from './components/CalculatorFrame';

function App() {
  const [count, setCount] = useState(0)

  return (

    <main className='h-[100vh] flex flex-col items-center justify-center'>
      <CalculatorFrame />
    </main>
  )
}

export default App;

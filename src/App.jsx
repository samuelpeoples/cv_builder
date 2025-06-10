import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <form action="">
        <fieldset>
          <label for="name">Your Name: </label>
          <input type="name" name="name" id="name" />
        </fieldset>
      </form>
    </>
  )
}

export default App

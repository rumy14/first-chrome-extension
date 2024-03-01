
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [colour, setColour] = useState('colour');
  const onClick = async () => {
    let[tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: {tabId: tab.id! },
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      }
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Extension</h1>
      <div className="card">
        <input type="color" onChange={(e) =>setColour(e.currentTarget.value)} value=""></input>
        <button onClick={() => onClick()}>Click Me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

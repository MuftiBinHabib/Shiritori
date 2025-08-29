import React, { useState } from 'react'

const App = () => {

  const [turn, setTurn] = useState(1); // 1 = Player 1, 2 = Player 2
  const [input, setInput] = useState("");
   const [history, setHistory] = useState([]);

  const handlesubmit = () =>{
    
    setInput("");
    if (turn === 1) {
  setTurn(2); // switch to Player 2
} else {
  setTurn(1); // switch to Player 1
}
   
  }
  return (
    <div>
      <h1>Shiritori</h1>
      <p className="mb-2">Current turn: Player {turn}</p>
      <input className='border-1' type="text" />
      <button className='border-1 px-2 py-1 rounded' onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default App
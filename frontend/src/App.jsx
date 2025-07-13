// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || 'Something went wrong');
        setSentiment('');
        return;
      }

      const data = await res.json();
      setSentiment(data.sentiment);
      setError('');
    } catch (err) {
      setError('Could not connect to the backend.');
      setSentiment('');
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔥 Sentiment Classifier</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={60}
        style={{ fontSize: '16px', padding: '10px' }}
      />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Analyze
      </button>
      <br /><br />
      {sentiment && <h3>🧠 Sentiment: <span style={{ color: sentiment === 'Positive' ? 'green' : 'red' }}>{sentiment}</span></h3>}
      {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}
    </div>
  );
}

export default App;

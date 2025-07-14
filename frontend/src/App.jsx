
import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {

      // const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      // const API_BASE_URL = "http://13.203.226.14:5000";

      // API_BASE_URL
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/analyze`, {
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

import './App.css';
import SampleGame from './routes/SampleGame';
import RandomGame from './routes/RandomGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Based 3-in-a-Row Game!</h1>
      </header>
      <main>
        <SampleGame />
        <RandomGame />
      </main>
    </div>
  );
}

export default App;

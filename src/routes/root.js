
import { Outlet } from "react-router-dom";

import '../App.css';

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Based 3-in-a-Row Game!</h1>
        <nav>
          <ul>
          <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/sample`}>Sample Game</a>
            </li>
            <li>
              <a href={`/random`}>Random Game</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;

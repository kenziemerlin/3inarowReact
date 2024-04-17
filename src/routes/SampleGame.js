import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SampleGame = () => {
  const [puzzleData, setPuzzleData] = useState(null);
  const [showIncorrect, setShowIncorrect] = useState(false);

  useEffect(() => {
    fetchPuzzleData();
  }, []);

  const fetchPuzzleData = () => {
    axios
      .get('https://prog2700.onrender.com/threeinarow/sample')
      .then(response => {
        console.log(response.data);
        setPuzzleData(response.data);
      })
      .catch(error => console.error('Failed to fetch puzzle data:', error));
  };

  const handleCheckPuzzle = () => {
    // Check puzzle logic here
  };

  const handleResetPuzzle = () => {
    fetchPuzzleData();
  };

  const handleToggleShowIncorrect = () => {
    setShowIncorrect(prevState => !prevState);
  };

  const toggleCellState = (rowIndex, cellIndex) => {
    const updatedPuzzleData = { ...puzzleData };
    updatedPuzzleData.rows[rowIndex][cellIndex].currentState =
      (updatedPuzzleData.rows[rowIndex][cellIndex].currentState + 1) % 3;
    setPuzzleData(updatedPuzzleData);
  };

  return (
    <div>
      <h1>3-in-a-Row Puzzle</h1>
      <button onClick={handleCheckPuzzle}>Check Puzzle</button>
      <button onClick={handleResetPuzzle}>Reset Puzzle</button>
      <input
        type="checkbox"
        id="showIncorrectCheckbox"
        checked={showIncorrect}
        onChange={handleToggleShowIncorrect}
      />
      <label htmlFor="showIncorrectCheckbox">Show Incorrect Squares</label>
      <div id="puzzleContainer">
        {puzzleData && (
          <table>
            <tbody>
              {puzzleData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`state-${cell.currentState}`}
                      onClick={() => toggleCellState(rowIndex, cellIndex)}
                    >
                      {showIncorrect && cell.currentState !== cell.correctState ? '!' : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SampleGame;

import React from 'react';
import Square from './Square';

const GameBoard = ({ gameData }) => {
  const renderGameBoard = () => {
    return gameData.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((square, colIndex) => (
          <Square key={colIndex} value={square} />
        ))}
      </div>
    ));
  };

  return (
    <div className="game-board">
      {renderGameBoard()}
    </div>
  );
};

export default GameBoard;
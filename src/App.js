import React, { useState } from 'react';
import './App.css';
import rosterData from './data.json';

const App = () => {
  const [roster, setRoster] = useState(rosterData.roster);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedRoster = [...roster].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setRoster(sortedRoster);
  };

  return (
    <div className="App">
      <h1>Guild Roster</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy(0)}>Name</th>
            <th onClick={() => sortBy(1)}>Class</th>
            <th onClick={() => sortBy(2)}>Rank</th>
            <th onClick={() => sortBy(3)}>Raid Points</th>
            <th onClick={() => sortBy(4)}>Rank Score</th>
            <th onClick={() => sortBy(5)}>Score Rate</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((member, index) => (
            <tr key={index}>
              <td>{member[0]}</td>
              <td>{member[1]}</td>
              <td>{member[2]}</td>
              <td>{member[3]}</td>
              <td>{member[4]}</td>
              <td>{member[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

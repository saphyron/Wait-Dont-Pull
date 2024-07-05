// Import React and useState hook from React library
import React, { useState } from 'react';
// Import CSS for the App component
import './App.css';
// Import roster data from a local JSON file
import rosterData from './data.json';

// Define the App component as a functional component
const App = () => {
  // State hook for roster, initialized with data from the imported JSON
  const [roster, setRoster] = useState(rosterData.roster);
  // State hook for sorting configuration, initialized with no key and ascending direction
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Function to sort the roster by a given key
  const sortBy = (key) => {
    let direction = 'ascending';
    // If the current sort key is the same as the new key, toggle the direction
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    // Update the sort configuration state
    setSortConfig({ key, direction });

    // Create a new sorted array from the roster
    const sortedRoster = [...roster].sort((a, b) => {
      // Compare function for sorting
      if (a[key] < b[key]) {
        // Ascending order
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        // Descending order
        return direction === 'ascending' ? 1 : -1;
      }
      // If equal, do not change order
      return 0;
    });
    // Update the roster state with the sorted array
    setRoster(sortedRoster);
  };

  // Render the App component
  return (
    <div className="App">
      <h1>Guild Roster (Updated 14:26 05/07/24)</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy(0)}>Name</th>
            <th onClick={() => sortBy(1)}>Class</th>
            <th onClick={() => sortBy(2)}>Rank</th>
            <th onClick={() => sortBy(3)}>Effort Points (EP)</th>
            <th onClick={() => sortBy(4)}>Gear Points (GP)</th>
            <th onClick={() => sortBy(5)}>Priority (PR)</th>
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

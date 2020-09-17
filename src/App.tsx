import React from 'react';

import useContentful from './hooks/useContentful';
import logo from './logo.svg';
import './App.css';

interface QueryData {
  person: Person;
}

const query = `
  query {
    person(id: "2RTmpNU09feS63WC5dNnz1") {
      name
    }
  }
`;

function App() {
  const data = useContentful<QueryData>(query);

  if (data === null) return <span>Loading...</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.person.name}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

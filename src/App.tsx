import React, { useState, useEffect } from 'react';
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

const { REACT_APP_SPACE_ID, REACT_APP_CDA } = process.env;

function App() {
  const [data, setData] = useState<QueryData | null>(null);

  const initialQuery = async () => {
    const response = await window.fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?access_token=${REACT_APP_CDA}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }
    );

    const { data } = await response.json();

    setData(data);
  };
  useEffect(() => {
    initialQuery();
  }, []);

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

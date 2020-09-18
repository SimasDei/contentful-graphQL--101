import React from 'react';

import useContentful from './hooks/useContentful';
import Person from './components/Person';
import './App.css';

interface QueryData {
  person: Person;
}

const query = `
  query {
    person(id: "4RSTMo9W39aotcQ2qkBRAX") {
      name
      socialTwitter
      socialGithub
      socialLinkedin
    }
  }
`;

function App() {
  const { data, errors } = useContentful<QueryData>(query);

  if (errors !== null) return <span>{errors.map((err) => err.message)}</span>;
  if (data === null) return <span>Loading...</span>;

  return (
    <div className="App">
      <Person person={data.person} />
    </div>
  );
}

export default App;

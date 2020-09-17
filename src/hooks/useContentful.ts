import { useState, useEffect } from 'react';

const { REACT_APP_SPACE_ID, REACT_APP_CDA } = process.env;

export const useContentful = <T>(query: string) => {
  const [data, setData] = useState<T | null>(null);

  const initialQuery = async () => {
    const response = await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${REACT_APP_CDA}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    setData(data);
  };

  useEffect(() => {
    initialQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default useContentful;

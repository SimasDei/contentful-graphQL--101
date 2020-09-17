import { useState, useEffect } from 'react';

const { REACT_APP_SPACE_ID, REACT_APP_CDA } = process.env;

export const useContentful = <T>(query: string) => {
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<any[] | null>(null);

  const initialQuery = async () => {
    try {
      const response = await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${REACT_APP_CDA}`,
        },
        body: JSON.stringify({ query }),
      });

      const { data, errors } = await response.json();
      if (errors) setErrors(errors);
      if (data) setData(data);
    } catch (error) {
      setErrors([error]);
    }
  };

  useEffect(() => {
    initialQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, errors };
};

export default useContentful;

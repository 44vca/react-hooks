import React, { Fragment, useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const useDataFetch = (initialURL, initialData) => {

  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          isError: true,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })

  const [url, setUrl] = useState(initialURL);


  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (isError) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_ERROR' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
}


function App() {

  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return (
    <Fragment>
      <form onSubmit={event => {
        doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);

        event.preventDefault();
      }}>
        <input type='text' value={query} onChange={event => setQuery(event.target.value)} />
        <button type='submit'>Search</button>
      </form>

      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url} target='_blank' rel='noopener norefferer'>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
    </Fragment>
  );
}

export default App;

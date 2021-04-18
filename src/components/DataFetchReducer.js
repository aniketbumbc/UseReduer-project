import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case 'FETCH_SUCC':
      debugger;
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERR':
      return {
        loading: false,
        post: {},
        error: 'Something Wrong',
      };
    default:
      return state;
  }
};

function DataFetchReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        debugger;
        dispatch({ type: 'FETCH_SUCC', payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERR' });
      });
  }, []);
  return (
    <div>
      {state.loading ? 'Loading.....' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchReducer;

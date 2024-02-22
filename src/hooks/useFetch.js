import { useState } from 'react';
import axios from 'axios'

const apiUri = axios.create({
  //baseURL: 'http://localhost:8082/',
  baseURL: 'https://evaluacion-y-perfilamiento.up.railway.app/',
});

const bearerToken = { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = 'GET', body = null, config = null) => {
    setLoading(true);

    if (url.startsWith('private')) {
      if (method === 'GET' || method === 'DELETE') {
        body = { headers: bearerToken };
      } else {
        config = { headers: bearerToken };
      }
    }

    try {
      const response = await apiUri[method.toLowerCase()](url, body, config);
      setResponse(response);
    } catch (error) {
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchData };
};
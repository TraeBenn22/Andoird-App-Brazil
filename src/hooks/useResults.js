import yelp from '../API/yelp';
import {useEffect, useState} from 'react';

export default () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get(
        '/search?term=plumbing&location=Brasilia',
      );
      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('plumbing');
  }, []);

  return [searchApi, results, errorMessage];
};

import React, {useState} from 'react';

import {StyleSheet, Text, ScrollView} from 'react-native';
import useResults from '../../hooks/useResults';
import SearchBar from '../../components/termPicker';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </>
  );
};

export default SearchScreen;

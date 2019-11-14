import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import types from '../search/search';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount(): void {
    const term = 'HVAC';
    const location = 'Brasilia';
    let url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
    let bearer =
      'Bearer ' +
      'sC4J-NWeL9EQgXM_6uHjTKcD3cYf61f2KkGs7q5OFS5rcOdpGk0nCHksvn4CV3Vj17Ec4xZcOlXSsVDUVpW6u-asOgsFVtVf-6BxeXtTffCJ7NcU-3nle6YEJigRXXYx';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.text())
      .then(resData => {
        const val = JSON.parse(resData);
        // alert(JSON.parse(resData));
        this.setState({
          isLoading: false,
          dataSource: val.businesses,
        });
      })
      .catch(error => {
        alert(error + this.state.dataSource);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{styles}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let stuff = this.state.dataSource.map((val, key) => {
        return (
          <ScrollView key={{key}}>
            <Text> Business Name: {val.name}</Text>
            <Text> Type of Work: {val.categories.title}</Text>
            <Text>Address: {val.location.display_address}</Text>
            <Text>Rating: {val.rating}</Text>
            <Text>Contact Number: {val.phone}</Text>
          </ScrollView>
        );
      });
      return <View style={{styles}}>{stuff}</View>;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

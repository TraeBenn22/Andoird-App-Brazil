import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import yelp from '../../API/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/businesses?res_id=${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.image} source={{uri: result.thumb}} />
          <Text style={styles.title}>{result.name}</Text>
          <Text style={styles.name}>Average Cost For Two </Text>
          <Text>
            {result.currency} {result}
          </Text>
          <Text style={styles.name}>Cuisines</Text>
          <Text>{result.cuisines}</Text>
          <Text style={styles.name}>Timings</Text>
          <Text>{result.timings}</Text>
          <Text style={styles.name}>Highlights -</Text>
          <FlatList
            data={result.highlights}
            keyExtractor={it => it}
            renderItem={({item}) => {
              return <Text>{item}</Text>;
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  image: {
    width: 'auto',
    height: 120,
    borderRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
});

export default ResultsShowScreen;

// import {React, useEffect, useState} from 'react';
// import {
//   Text,
//   Header,
//   Footer,
//   Content,
//   Container,
//   Button,
//   Left,
//   Right,
//   Form,
// } from 'native-base';
// import {StyleSheet, View, FlatList} from 'react-native';
import Term from '../search/search';

// const config = {
//   headers: {
//     Authorization:
//       'sC4J-NWeL9EQgXM_6uHjTKcD3cYf61f2KkGs7q5OFS5rcOdpGk0nCHksvn4CV3Vj17Ec4xZcOlXSsVDUVpW6u-asOgsFVtVf-6BxeXtTffCJ7NcU-3nle6YEJigRXXYx',
//   },
// };

//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }
//
//   componentDidMount() {
//     axios
//       .get(
//         'https://api.yelp.com/v3/businesses/search?term=plumbing&location=Brasilia',
//         config,
//       )
//       .then(response => this.setState({data: response}))
//       .catch(error => alert(this.state.data));
//   }
//
//   // fetchData = async () => {
//   //   const response = await fetch(
//   //     'https://api.yelp.com/v3/businesses/search?term=plumbing&location=Brasilia',
//   //     config,
//   //   );
//   //   const json = await response.json();
//   //   this.setState({data: json.results});
//   // };
//
//   render() {
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     });
//     // const info = axios
//     //   .get('https://api.yelp.com/v3/businesses/search', config)
//     //   .then(response => console.log(response));
//     return (
//       <View style={{styles}}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(x, i) => i}
//           renderItem={({item}) => <Text>{item}</Text>}
//         />
//       </View>
//     );
//   }
// }

// {/*<Container>*/}
// {/*  //         <Header>*/}
// {/*  //           <Left>*/}
// {/*  //             <Text>Tell us about the issue you are having</Text>*/}
// {/*  //           </Left>*/}
// {/*  //           <Right>*/}
// {/*  //             <Text>Find a Company that can handle your request!</Text>*/}
// {/*  //           </Right>*/}
// {/*  //         </Header>*/}
// {/*  //         <Content>*/}
// {/*  //           <Form>*/}
// {/*  //             <Picker*/}
//               note
//               mode="dropdown"
//               style={{width: 120}}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}>
//               <Picker.Item label="Heating and Air" value="HVAC" />
//               <Picker.Item label="Car Repair" value="CarRepair" />
//               <Picker.Item label="Plumbing" value="Plumbing" />
//               <Picker.Item label="Painting" value="Painting" />
//               <Picker.Item label="Carpentry" value="Carpentry" />
//             </Picker>
//             <Item floatingLabel>
//               <Label>Type of issue</Label>
//               <Input />
//             </Item>
//
//             <Button
//               backgroundColor="gray"
//               title="SaveInformation"
//               onPress={() => searchApi(this.state.selected)}>
//               <Text>Find a Company!</Text>
//             </Button>
//           </Form>
